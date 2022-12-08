import { EntityManager, Repository } from 'typeorm'
import { Region } from '../models/region'

export const RegionRepository = (manager: EntityManager) => { return manager.getRepository(Region) }
