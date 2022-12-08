import { EntityManager, Repository } from 'typeorm'
import { OrderEdit } from '../models'

export const OrderEditRepository = (manager: EntityManager) => { return manager.getRepository(OrderEdit) }
