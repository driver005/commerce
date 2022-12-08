import { EntityManager, Repository } from 'typeorm'
import { ClaimImage } from '../models/claim-image'

export const ClaimImageRepository = (manager: EntityManager) => { return manager.getRepository(ClaimImage) }
