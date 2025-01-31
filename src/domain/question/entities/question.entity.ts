import { UserEntity } from 'src/domain/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'author_id', type: 'int' })
  authorId: number;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'content', type: 'varchar' })
  content: string;

  @Column({ name: 'slug', type: 'varchar' })
  slug: string;

  @Column({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'datetime' })
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.question, { nullable: false })
  @JoinColumn({ name: 'author_id', referencedColumnName: 'id' })
  author: UserEntity;
}
