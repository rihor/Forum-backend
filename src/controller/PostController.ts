import { Request, Response } from 'express'
import { Post } from '../entity/Post'

class PostController {
  async index (request: Request, response: Response): Promise<Response> {
    const posts = await Post.find()

    return response.json(posts)
  }

  async show (request: Request, response: Response): Promise<Response> {
    const post = await Post.findOne(request.params.id)

    return response.json(post)
  }

  async store (request: Request, response: Response): Promise<Response> {
    const post = await Post.save(request.body)
    return response.json(post)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const post = await Post.update(request.params.id, request.body)
    return response.json(post)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const postToRemove = await Post.findOne(request.params.id)
    const post = await Post.remove(postToRemove)
    return response.json(post)
  }
}

export default new PostController()
