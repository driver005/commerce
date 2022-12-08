import { EntityManager, Repository } from 'typeorm'
import { Refund } from '../models/refund'

export const RefundRepository = (manager: EntityManager) => { return manager.getRepository(Refund) }
