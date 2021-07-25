import { Request, Response } from 'express'
import { CategoriesService } from '../services'

class CategoriesController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const categoriesService = new CategoriesService()

      const category = await categoriesService.create(request.body)

      return response.json(category)
    } catch (error) {
      return response.json(error)
    }
  }
}

export { CategoriesController }
