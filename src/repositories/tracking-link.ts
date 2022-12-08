import { EntityManager, Repository } from 'typeorm'
import { TrackingLink } from '../models/tracking-link'

export const TrackingLinkRepository = (manager: EntityManager) => { return manager.getRepository(TrackingLink) }
