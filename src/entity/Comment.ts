import { Entity, ManyToOne } from 'typeorm'

import { Content } from './abstracts/Content'
import { User } from './User'

@Entity()
export class Comment extends Content {
  @ManyToOne(
    () => User,
    user => user.comments
  )
  author: User;
}
