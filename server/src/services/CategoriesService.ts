import { getCustomRepository, Repository } from 'typeorm'
import { Category } from '../entities'
import { CategoriesRepository } from '../repositories'

interface ICategory {
  id?: string
  name: string
  created_at?: Date
  updated_at?: Date
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
}

export { CategoriesService }
