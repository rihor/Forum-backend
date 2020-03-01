import dotenv from 'dotenv'

let path: string

switch (process.env.NODE_ENV) {
  case 'test':
    path = '.env.test'
    break
  default:
    path = '.env'
}

dotenv.config({ path })
