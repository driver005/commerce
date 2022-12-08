import { EntityManager, Repository } from 'typeorm'
import { ProductOption } from '../models/product-option'

export const ProductOptionRepository = (manager: EntityManager) => { return manager.getRepository(ProductOption) }
