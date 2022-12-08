import { EntityManager, Repository } from 'typeorm'
import { ProductOptionValue } from '../models/product-option-value'

// eslint-disable-next-line max-len
export const ProductOptionValueRepository = (manager: EntityManager) => { return manager.getRepository(ProductOptionValue) }
