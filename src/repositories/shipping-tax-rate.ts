import { EntityManager, Repository } from 'typeorm'
import { ShippingTaxRate } from '../models/shipping-tax-rate'

export const ShippingTaxRateRepository = (manager: EntityManager) => { return manager.getRepository(ShippingTaxRate) }
