import { EntityManager, Repository } from 'typeorm'
import { IdempotencyKey } from '../models/idempotency-key'

export const IdempotencyKeyRepository = (manager: EntityManager) => { return manager.getRepository(IdempotencyKey) }
