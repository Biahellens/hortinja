import { Request, Response } from 'express'
import { CategoriesService } from '../services'

class CategoriesController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const categoriesService = new CategoriesService()

      const category = await categoriesService.create(request.body)

      return response.status(201).json(category)
    } catch (error) {
      if (error.length > 0) return response.status(422).json(error)
      return response.status(500).json(error)
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const categoriesService = new CategoriesService()
      const category = await categoriesService.show(id)

      return response.json(category)
    } catch (error) {
      if (error?.message) return response.status(404).json(error.message)
      return response.status(500).json(error)
    }
  }

  async index(_request: Request, response: Response): Promise<Response> {
    try {
      const categoriesService = new CategoriesService()
      const categories = await categoriesService.index()

      return response.json(categories)
    } catch (error) {
      return response.status(500).json(error)
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const categoriesService = new CategoriesService()

      const category = await categoriesService.updated(id, request.body)

      return response.json(category)
    } catch (error) {
      if (error.length > 0) return response.status(422).json(error)
      if (error?.message) return response.status(404).json(error.message)
      return response.status(500).json(error)
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const categoriesService = new CategoriesService()

      const category = await categoriesService.delete(id)

      return response.status(204).json(category)
    } catch (error) {
      if (error?.message) return response.status(404).json(error.message)
      return response.status(500).json(error)
    }
  }
}

export { CategoriesController }
