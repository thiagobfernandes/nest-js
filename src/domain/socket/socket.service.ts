import * as net from "net";
import { HttpStatus, Injectable } from "@nestjs/common";
import { ExceptionError } from "src/infra/generic-dtos/exception-error.dto";
import { Logger } from "src/infra/logger/logger";
import { NetworkEnum } from "./enum/network.enum";
import { NetworkResponseDTO } from "./dto/NetworkResponse.dto";
import { ResponseDTO } from "src/infra/generic-dtos/response.dto";
import { Server } from "socket.io";
import { WebSocketServer } from "@nestjs/websockets";
import { GatewayWebSocket } from "src/infra/gateway/gateway.service";

@Injectable()
export class SocketService {
  private client: net.Socket;
  private port: number = 8082;
  private ip: string = "127.0.0.1";
  private isConnected: boolean = false;

  constructor(private readonly gateway: GatewayWebSocket) {}

  public startConnection() {
    if (this.isConnected) {
      throw new ExceptionError(
        "ERROR",
        "Connection is active",
        HttpStatus.BAD_REQUEST,
        "Conexão já ativa"
      );
    }

    this.client = new net.Socket();
    this.client.connect(this.port, this.ip, () => {
      this.isConnected = true;
      Logger.info(`${Date.now()} - Conexão com o servidor TCP estabelecida`);
    });

    this.client.on(NetworkEnum.EVENT_RECEIVE, (data) => {
      this.sendDataToWebsocket(data.toString());
    });

    this.client.on(NetworkEnum.EVENT_CLOSE, () => {
      Logger.info(`${Date.now()} - Conexão fechada`);
      this.isConnected = false;
    });

    this.client.on("error", (err) => {
      Logger.error(` Error connecting to TCP: ${err}`);
    });

    return new ResponseDTO(
      "",
      "Conexão iniciada com sucesso",
      HttpStatus.ACCEPTED
    );
  }

  private sendDataToWebsocket(rawData: string) {
    const parseData = this.parsedData(rawData);
    if (this.gateway.server) {
      this.gateway.networkDataMessage(parseData);
    } else {
      Logger.error("websocket not found");
      throw new ExceptionError(
        "ERROR",
        "WebSocket not found",
        HttpStatus.BAD_REQUEST,
        "WebSocket not found"
      );
    }
  }

  private parsedData(rawData: string) {
    const dataLines = rawData.split("\n");
    const jsonData = {};

    dataLines.forEach((line) => {
      const [key, value] = line.split(": ");
      if (key && value) {
        jsonData[key.trim()] = value.trim();
      }
    });

    return NetworkResponseDTO.fromEntity(jsonData);
  }
}
