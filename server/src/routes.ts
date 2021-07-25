import { Router } from 'express'

// controllers
import { CategoriesController } from './controllers'

const routes = Router()

const categoriesController = new CategoriesController()

// categories
routes.post('/categories', categoriesController.create)

export { routes }
