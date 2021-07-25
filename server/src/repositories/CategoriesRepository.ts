import { EntityRepository, Repository } from 'typeorm'
import { Category } from '../entities'

@EntityRepository(Category)
class CategoriesRepository extends Repository<Category> {}

export { CategoriesRepository }
