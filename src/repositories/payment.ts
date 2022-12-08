import { EntityManager, Repository } from 'typeorm'
import { Payment } from '../models/payment'

export const PaymentRepository = (manager: EntityManager) => { return manager.getRepository(Payment) }
