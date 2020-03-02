import { Request, Response } from 'express'
import { Comment } from '../entity/Comment'

class CommentController {
  async index (request: Request, response: Response): Promise<Response> {
    const comments = await Comment.find()

    return response.json(comments)
  }

  async show (request: Request, response: Response): Promise<Response> {
    const comment = await Comment.findOne(request.params.id)

    return response.json(comment)
  }

  async store (request: Request, response: Response): Promise<Response> {
    const comment = await Comment.save(request.body)
    return response.json(comment)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const comment = await Comment.update(request.params.id, request.body)
    return response.json(comment)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const commentToRemove = await Comment.findOne(request.params.id)
    const comment = await Comment.remove(commentToRemove)
    return response.json(comment)
  }
}

export default new CommentController()
