import { getCustomRepository, Repository } from 'typeorm'
import { Category } from '../entities'
import { CategoriesRepository } from '../repositories'

interface ICategory {
  id?: string
  name: string
  created_at?: Date
  updated_at?: Date
}

interface IMessage {
  message: string
}

class CategoriesService {
  private categoriesRepository: Repository<Category>

  constructor() {
    this.categoriesRepository = getCustomRepository(CategoriesRepository)
  }

  async create(params: ICategory): Promise<ICategory> {
    try {
      // verifica se a categoria existe
      const categoryExists = await this.categoriesRepository.findOne({
        name: params.name,
      })

      if (categoryExists) {
        return categoryExists
      }

      const category = this.categoriesRepository.create({
        name: params.name,
      })

      await this.categoriesRepository.save(category)

      return category
    } catch (error) {
      return error
    }
  }

  async show(id: string): Promise<ICategory | undefined> {
    try {
      const category = await this.categoriesRepository.findOne({
        id,
      })

      return category
    } catch (error) {
      return error
    }
  }

  async index(): Promise<ICategory[]> {
    try {
      const categories = await this.categoriesRepository.find()

      return categories
    } catch (error) {
      return error
    }
  }

  async updated(id: string, params: ICategory): Promise<IMessage | undefined> {
    try {
      await this.categoriesRepository
        .createQueryBuilder()
        .update(Category)
        .set({ name: params.name })
        .where('id = :id', { id })
        .execute()

      return {
        message: `A categoria referente ao id ${id} foi atualizada com sucesso`,
      }
    } catch (error) {
      return error
    }
  }

  async delete(id: string): Promise<IMessage | undefined> {
    try {
      await this.categoriesRepository
        .createQueryBuilder()
        .delete()
        .from(Category)
        .where('id = :id', { id })
        .execute()

      return {
        message: `A categoria referente ao id ${id} foi removida com sucesso`,
      }
    } catch (error) {
      return error
    }
  }
}

export { CategoriesService }
