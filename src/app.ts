import './bootstrap' // setup env variables
import 'reflect-metadata' // necessário para o TypeORM
import express from 'express'
import cors from 'cors'

import routes from './routes'
import database from './database'

class App {
  public app: express.Application;

  constructor () {
    this.app = express()

    this.middlewares()
    this.init()
  }

  private middlewares (): void {
    this.app.use(express.json())
    this.app.use(cors())
  }

  private async init (): Promise<void> {
    database.init()

    this.app.use(routes)
  }
}

export default new App().app
