import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity() 
export class NetworkEntity {

@PrimaryGeneratedColumn({name:'id', type:'int'})
id:number

@Column({name:'ipSource', type:'varchar'})
ipSource:string

@Column({name:'ipDestination', type:'varchar'})
  ipDestination:string
 
 @Column({name:'protocol', type:'varchar'}) 
  protocol:string

  @Column({name:'size', type:'varchar'})
  size:string
  
  @Column({name:'ttl', type:'varchar'})
  ttl:string

  @Column({name:'header_checksum', type:'varchar'})
  headerCheckSum:string

  @Column({name:'fragment_offset', type:'varchar'})
  fragmentOffset:string

  @Column({name:'etherType', type:'varchar'})
  etherType:string


}