import { EntityManager, Repository } from 'typeorm'
import { DiscountRule } from '../models/discount-rule'

export const DiscountRuleRepository = (manager: EntityManager) => { return manager.getRepository(DiscountRule) }
