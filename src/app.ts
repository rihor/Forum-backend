import './bootstrap' // setup env variables
import express from 'express'
import cors from 'cors'
import 'reflect-metadata' // necessário para o TypeORM
import { createConnection } from 'typeorm'

import routes from './routes'

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
    await createConnection()

    this.app.use(routes)
  }
}

export default new App().app
