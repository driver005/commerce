import { EntityManager, Repository } from 'typeorm'
import { ReturnReason } from '../models/return-reason'

export const ReturnReasonRepository = (manager: EntityManager) => { return manager.getRepository(ReturnReason) }
