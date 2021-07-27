import { EntityRepository, Repository } from 'typeorm'
import { Horticultural } from '../entities'

@EntityRepository(Horticultural)
class HorticulturesRepository extends Repository<Horticultural> {}

export { HorticulturesRepository }
