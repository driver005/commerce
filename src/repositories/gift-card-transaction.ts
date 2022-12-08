import { EntityManager, Repository } from 'typeorm'
import { GiftCardTransaction } from '../models/gift-card-transaction'

// eslint-disable-next-line max-len
export const GiftCardTransactionRepository = (manager: EntityManager) => { return manager.getRepository(GiftCardTransaction) }
