import { Router } from 'express'

// controllers
import { CategoriesController } from './controllers'

const routes = Router()

const categoriesController = new CategoriesController()

// categories
routes.post('/categories', categoriesController.create)
routes.get('/categories/:id', categoriesController.show)
routes.get('/categories', categoriesController.index)
routes.put('/categories/:id', categoriesController.update)
routes.delete('/categories/:id', categoriesController.delete)

export { routes }
