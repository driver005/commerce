import { EntityManager, Repository } from 'typeorm'
import { ClaimOrder } from '../models/claim-order'

export const ClaimRepository = (manager: EntityManager) => { return manager.getRepository(ClaimOrder) }
