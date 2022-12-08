import { EntityManager, Repository } from 'typeorm'

import { OrderItemChange } from '../models/order-item-change'

export const OrderItemChangeRepository = (manager: EntityManager) => { return manager.getRepository(OrderItemChange) }
