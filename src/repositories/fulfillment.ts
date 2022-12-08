import { EntityManager, Repository } from 'typeorm'
import { Fulfillment } from '../models/fulfillment'

export const FulfillmentRepository = (manager: EntityManager) => { return manager.getRepository(Fulfillment) }
