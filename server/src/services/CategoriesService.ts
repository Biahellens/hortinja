import { getCustomRepository, Repository } from 'typeorm'
import { validate } from 'class-validator'
import { Category } from '../entities'
import { CategoriesRepository } from '../repositories'

interface IMessage {
  message: string
}

class CategoriesService {
  private categoriesRepository: Repository<Category>

  constructor() {
    this.categoriesRepository = getCustomRepository(CategoriesRepository)
  }

  async create(params: Category): Promise<Category> {
    // verifica se a categoria existe
    const categoryExists = await this.categoriesRepository.findOne({
      name: params.name,
    })

    if (categoryExists) return categoryExists

    const category = this.categoriesRepository.create({
      name: params.name,
    })

    const errors = await validate(category)
    if (errors.length > 0) throw errors

    await this.categoriesRepository.save(category)

    return category
  }

  async show(id: string): Promise<Category> {
    const category = await this.categoriesRepository.findOne({
      id,
    })

    if (category) return category

    throw new Error(`Não foi encontrado a categoria do id ${id}!`)
  }

  async index(): Promise<Category[]> {
    return await this.categoriesRepository.find({
      relations: ['horticultures'],
      order: { name: 'ASC' },
    })
  }

  async updated(id: string, params: Category): Promise<Category> {
    const category = await this.categoriesRepository.findOne(id)

    if (!category)
      throw new Error(`Não foi encontrado a categoria do id ${id}!`)

    const result = this.categoriesRepository.merge(category, params)
    const errors = await validate(result)
    if (errors.length > 0) throw errors
    await this.categoriesRepository.update(id, category)
    return category
  }

  async delete(id: string): Promise<IMessage | undefined> {
    const category = await this.categoriesRepository.findOne(id)

    if (!category)
      throw new Error(`Não foi encontrado a categoria do id ${id}!`)

    await this.categoriesRepository.delete(id)

    return {
      message: `A categoria referente ao id ${id} foi removida com sucesso`,
    }
  }
}

export { CategoriesService }
