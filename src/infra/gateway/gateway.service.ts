import { Injectable, OnModuleInit } from "@nestjs/common";
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";

@WebSocketGateway({
  cors: {
    origin: "*",
  },
}) // Agora corretamente aplicado à classe
@Injectable()
export class GatewayWebSocket implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on("connection", (socket) => {
      console.log(`Client connected: ${socket.id}`);
    });
  }

  @SubscribeMessage("networkDataMessage")
  networkDataMessage(@MessageBody() body: any) {
    console.log(`Received message: `, body); // Para ver o conteúdo do body
  }
}
