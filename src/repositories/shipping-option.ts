import { EntityManager, Repository } from 'typeorm'
import { ShippingOption } from '../models/shipping-option'

export const ShippingOptionRepository = (manager: EntityManager) => { return manager.getRepository(ShippingOption) }
