import { Entity, Column, BeforeInsert, BeforeUpdate, OneToMany } from 'typeorm'
import bcrypt from 'bcryptjs'

import { Content } from './abstracts/Content'
import { Post } from './Post'
import { Comment } from './Comment'

@Entity()
export class User extends Content {
  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword (): Promise<void> {
    if (this.password) {
      this.password = await bcrypt.hash(this.password, 8)
    }
  }

  @OneToMany(
    () => Post,
    post => post.author
  )
  posts: Post[];

  @OneToMany(
    () => Comment,
    comment => comment.author
  )
  comments: Comment[];
}
