import { EntityManager, Repository } from 'typeorm'
import { ShippingOptionRequirement } from '../models/shipping-option-requirement'

// eslint-disable-next-line max-len
export const ShippingOptionRequirementRepository = (manager: EntityManager) => { return manager.getRepository(ShippingOptionRequirement) }
