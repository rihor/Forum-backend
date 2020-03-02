import { DatabaseType } from 'typeorm'

const options = {
  // entities should be set on database.ts
  host: process.env.DB_HOST,
  type: process.env.DB_TYPE as DatabaseType,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  synchronize: process.env.DB_SYNCHRONIZE,
  logging: process.env.DB_LOGGING
}

export default options
