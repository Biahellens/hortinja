import { Router } from 'express'

// controllers
import { CategoriesController } from './controllers'
import { HorticulturesController } from './controllers'

const routes = Router()

const categoriesController = new CategoriesController()
const horticulturesController = new HorticulturesController()

// categories
routes.post('/categories', categoriesController.create)
routes.get('/categories/:id', categoriesController.show)
routes.get('/categories', categoriesController.index)
routes.put('/categories/:id', categoriesController.update)
routes.delete('/categories/:id', categoriesController.delete)

// horticultures
routes.post(
  '/categories/:category_id/horticultures',
  horticulturesController.create
)
routes.get(
  '/categories/:category_id/horticultures/:id',
  horticulturesController.show
)
routes.get(
  '/categories/:category_id/horticultures',
  horticulturesController.index
)
routes.put(
  '/categories/:category_id/horticultures/:id',
  horticulturesController.update
)
routes.delete(
  '/categories/:category_id/horticultures/:id',
  horticulturesController.delete
)

export { routes }
