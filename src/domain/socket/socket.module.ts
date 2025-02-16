import { Module } from "@nestjs/common";
import { SocketController } from "./socket.controller";
import { SocketService } from "./socket.service";
import { GatewayWebSocket } from "src/infra/gateway/gateway.service";
import { GatewayModule } from "src/infra/gateway/gateway.module";

@Module({
  controllers: [SocketController],
  providers: [SocketService, GatewayWebSocket],
  imports: [GatewayModule],
})
export class SocketModule {}
