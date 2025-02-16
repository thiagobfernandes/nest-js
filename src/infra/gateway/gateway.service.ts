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
}) 
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
    //here i'm can emit to a client but currently i want just see the network logs
    console.log(`Received message: `, body); 
  }
}
