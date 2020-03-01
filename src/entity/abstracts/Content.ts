import { PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

export abstract class Content extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;
}
