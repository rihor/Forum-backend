import { createConnection, Connection } from 'typeorm'

import config from './configs/database'

import { User } from './entity/User'
import { Post } from './entity/Post'
import { Comment } from './entity/Comment'

class Database {
  private config

  init (): Promise<Connection> {
    this.config = config
    const configs = { ...this.config, entities: [User, Post, Comment] }

    return createConnection(configs)
  }
}

export default new Database()
