import { Request, Response } from 'express'
import { User } from '../entity/User'

class UserController {
  async index (request: Request, response: Response): Promise<Response> {
    const users = await User.find()

    return response.json(users)
  }

  async show (request: Request, response: Response): Promise<Response> {
    const user = await User.findOne(request.params.id)

    return response.json(user)
  }

  async store (request: Request, response: Response): Promise<Response> {
    const user = await User.save(request.body)
    return response.json(user)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const user = await User.update(request.params.id, request.body)
    return response.json(user)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const userToRemove = await User.findOne(request.params.id)
    const user = await User.remove(userToRemove)
    return response.json(user)
  }
}

export default new UserController()
