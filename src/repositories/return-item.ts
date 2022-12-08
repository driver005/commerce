import { EntityManager, Repository } from 'typeorm'
import { ReturnItem } from '../models/return-item'

export const ReturnItemRepository = (manager: EntityManager) => { return manager.getRepository(ReturnItem) }
