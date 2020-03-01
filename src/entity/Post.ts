import { Entity, Column, ManyToOne } from 'typeorm'

import { Content } from './abstracts/Content'

import { User } from './User'

@Entity()
export class Post extends Content {
  @Column()
  title: string;

  @ManyToOne(
    () => User,
    user => user.posts
  )
  author: User;
}
