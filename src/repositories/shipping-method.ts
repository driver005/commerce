import { EntityManager, Repository } from 'typeorm'
import { ShippingMethod } from '../models/shipping-method'

export const ShippingMethodRepository = (manager: EntityManager) => { return manager.getRepository(ShippingMethod) }
