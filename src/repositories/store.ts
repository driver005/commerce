import { EntityManager, Repository } from 'typeorm'
import { Store } from '../models/store'

export const StoreRepository = (manager: EntityManager) => { return manager.getRepository(Store) }
