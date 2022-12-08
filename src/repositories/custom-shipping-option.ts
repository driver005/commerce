import { EntityManager, Repository } from 'typeorm'
import { CustomShippingOption } from './../models/custom-shipping-option'

export const CustomShippingOptionRepository = (manager: EntityManager) => { return manager.getRepository(CustomShippingOption) }
