import { QuestionEntity } from 'src/domain/question/entities/question.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', nullable: true })
  name: string;

  @Column({ name: 'email', type: 'varchar', nullable: true })
  email: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @OneToMany(() => QuestionEntity, (user) => user.author)
  question: QuestionEntity[];
}
