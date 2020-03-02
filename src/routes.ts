import { Router } from 'express'

import UserController from './controller/UserController'
import PostController from './controller/PostController'
import CommentController from './controller/CommentController'

const routes = Router()

routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.get('/users', UserController.store)
routes.get('/users/:id', UserController.update)
routes.get('/users/:id', UserController.delete)

routes.get('/posts', PostController.index)
routes.get('/posts/:id', PostController.show)
routes.get('/posts', PostController.store)
routes.get('/posts/:id', PostController.update)
routes.get('/posts/:id', PostController.delete)

routes.get('/comments', CommentController.index)
routes.get('/comments/:id', CommentController.show)
routes.get('/comments', CommentController.store)
routes.get('/comments/:id', CommentController.update)
routes.get('/comments/:id', CommentController.delete)

export default routes
