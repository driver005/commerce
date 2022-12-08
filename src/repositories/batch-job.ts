import { EntityManager, Repository } from 'typeorm'
import { BatchJob } from '../models'

export const BatchJobRepository = (manager: EntityManager) => { return manager.getRepository(BatchJob) }
