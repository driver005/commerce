import { EntityManager, Repository } from 'typeorm'
import { ProductTaxRate } from '../models/product-tax-rate'

export const ProductTaxRateRepository = (manager: EntityManager) => { return manager.getRepository(ProductTaxRate) }
