import { getCustomRepository, Repository, FindManyOptions } from 'typeorm'
import { validate } from 'class-validator'
import { Horticultural } from '../entities'
import { HorticulturesRepository } from '../repositories'

interface IMessage {
  message: string
}

interface IQueryIndex {
  category_id: string
  name?: string
}

class HorticulturesService {
  private horticulturesRepository: Repository<Horticultural>
  private filterIndexQuery(query: IQueryIndex): FindManyOptions<Horticultural> {
    let queryParams: FindManyOptions<Horticultural> = {
      where: { category: query.category_id },
    }

    if (query?.name) {
      queryParams = {
        ...queryParams,
        where: {
          name: query.name,
        },
      }
    }

    return queryParams
  }

  constructor() {
    this.horticulturesRepository = getCustomRepository(HorticulturesRepository)
  }

  async create(params: Horticultural): Promise<Horticultural> {
    // verifica se a categoria existe
    const horticulturalExists = await this.horticulturesRepository.findOne({
      name: params.name,
      image: params.image,
    })

    if (horticulturalExists) return horticulturalExists

    const horticultural = this.horticulturesRepository.create({
      name: params.name,
      category: params.category,
      shade: params.shade,
      image: params.image,
      description: params.description,
      average_price: params.average_price,
      measurement: params.measurement,
      benefits: params.benefits,
    })

    const errors = await validate(horticultural)
    if (errors.length > 0) throw errors

    await this.horticulturesRepository.save(horticultural)

    return horticultural
  }

  async show(id: string): Promise<Horticultural> {
    const horticultural = await this.horticulturesRepository.findOne({
      id,
    })

    if (horticultural) return horticultural

    throw new Error(
      `O registro referete ao identificador ${id} não foi encontrado!`
    )
  }

  async index(query: IQueryIndex): Promise<Horticultural[]> {
    return await this.horticulturesRepository.find(this.filterIndexQuery(query))
  }

  async updated(id: string, params: Horticultural): Promise<Horticultural> {
    const horticultural = await this.horticulturesRepository.findOne(id)

    if (!horticultural)
      throw new Error(
        `O registro referete ao identificador ${id} não foi encontrado!`
      )

    const result = this.horticulturesRepository.merge(horticultural, params)
    console.log(result)
    const errors = await validate(result)
    if (errors.length > 0) throw errors
    await this.horticulturesRepository.update(id, horticultural)
    return horticultural
  }

  async delete(id: string): Promise<IMessage | undefined> {
    const horticultural = await this.horticulturesRepository.findOne(id)

    if (!horticultural)
      throw new Error(
        `O registro referete ao identificador ${id} não foi encontrado!`
      )

    await this.horticulturesRepository.delete(id)

    return {
      message: `A categoria referente ao id ${id} foi removida com sucesso`,
    }
  }
}

export { HorticulturesService }
