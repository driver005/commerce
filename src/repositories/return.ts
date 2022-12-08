import { EntityManager, Repository } from 'typeorm'
import { Return } from '../models/return'

export const ReturnRepository = (manager: EntityManager) => { return manager.getRepository(Return) }
