import { EntityManager, Repository } from 'typeorm'
import { ClaimItem } from '../models/claim-item'

export const ClaimItemRepository = (manager: EntityManager) => { return manager.getRepository(ClaimItem) }
