import { Request, Response } from 'express'
import { HorticulturesService } from '../services'

class HorticulturesController {
  async create(request: Request, response: Response): Promise<Response> {
    try {
      const horticulturesService = new HorticulturesService()

      const horticultural = await horticulturesService.create(request.body)

      return response.status(201).json(horticultural)
    } catch (error) {
      if (error.length > 0) return response.status(422).json(error)
      return response.status(500).json(error)
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const horticulturesService = new HorticulturesService()
      const horticultural = await horticulturesService.show(id)

      return response.json(horticultural)
    } catch (error) {
      if (error?.message) return response.status(404).json(error.message)
      return response.status(500).json(error)
    }
  }

  async index(request: Request, response: Response): Promise<Response> {
    try {
      const { query } = request
      const horticulturesService = new HorticulturesService()
      const horticultures = await horticulturesService.index(query)

      return response.json(horticultures)
    } catch (error) {
      return response.status(500).json(error)
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const horticulturesService = new HorticulturesService()

      const horticultural = await horticulturesService.updated(id, request.body)

      return response.json(horticultural)
    } catch (error) {
      if (error.length > 0) return response.status(422).json(error)
      if (error?.message) return response.status(404).json(error.message)
      return response.status(500).json(error)
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params
      const horticulturesService = new HorticulturesService()

      const horticultural = await horticulturesService.delete(id)

      return response.status(204).json(horticultural)
    } catch (error) {
      if (error?.message) return response.status(404).json(error.message)
      return response.status(500).json(error)
    }
  }
}

export { HorticulturesController }
