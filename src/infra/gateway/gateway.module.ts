import { Module } from "@nestjs/common";
import { GatewayWebSocket } from "./gateway.service";

@Module({
  exports: [GatewayWebSocket],
  providers: [GatewayWebSocket],
})
export class GatewayModule {}
