import { Protocol } from "../enum/protocol.enum"

export class NetworkResponseDTO {

  ipSource:string
  ipDestination:string
  protocolName:string
  protocol:number
  size:string 
  ttl:string
  headerCheckSum:string
  fragmentOffset:string
  etherType:string

  static fromEntity (networkResponseSocket):NetworkResponseDTO {
    return {
        ipSource:networkResponseSocket.ipSource,
        ipDestination:networkResponseSocket.ipDestination,
        protocolName:Protocol[networkResponseSocket.protocol],
        protocol:networkResponseSocket.protocol,
        size:networkResponseSocket.size,
        etherType:networkResponseSocket.etherType,
        headerCheckSum:networkResponseSocket.headerCheckSum,
        fragmentOffset:networkResponseSocket.fragmentOffset,
        ttl:networkResponseSocket.ttl
    }

  }
}