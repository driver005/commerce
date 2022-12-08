import { EntityManager, Repository } from 'typeorm'
import { Discount } from '../models/discount'

export const DiscountRepository = (manager: EntityManager) => { return manager.getRepository(Discount) }
