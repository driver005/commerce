import { EntityManager, Repository } from 'typeorm'
import { ShippingProfile } from '../models/shipping-profile'

export const ShippingProfileRepository = (manager: EntityManager) => { return manager.getRepository(ShippingProfile) }
