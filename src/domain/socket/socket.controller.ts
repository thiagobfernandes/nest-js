import { Controller, Get } from "@nestjs/common";
import { SocketService } from "./socket.service";
import { ResponseDTO } from "src/infra/generic-dtos/response.dto";

@Controller("socket")
export class SocketController {
  constructor(private readonly socketService: SocketService) {}

  @Get("start")
  async startSocket(): Promise<ResponseDTO> {
    return this.socketService.startConnection();
  }
}
