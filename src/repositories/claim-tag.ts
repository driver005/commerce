import { EntityManager, Repository } from 'typeorm'
import { ClaimTag } from '../models/claim-tag'

export const ClaimTagRepository = (manager: EntityManager) => { return manager.getRepository(ClaimTag) }
