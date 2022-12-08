import { EntityManager, Repository } from 'typeorm'
import { Currency } from '../models'

export const CurrencyRepository = (manager: EntityManager) => { return manager.getRepository(Currency) }
