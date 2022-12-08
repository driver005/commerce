import { EntityManager, Repository } from 'typeorm'
import { StagedJob } from '../models/staged-job'

export const StagedJobRepository = (manager: EntityManager) => { return manager.getRepository(StagedJob) }