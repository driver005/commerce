import { EntityManager, Repository } from 'typeorm'
import { DraftOrder } from '../models/draft-order'

export const DraftOrderRepository = (manager: EntityManager) => { return manager.getRepository(DraftOrder) }
