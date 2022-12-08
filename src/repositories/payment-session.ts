import { EntityManager, Repository } from 'typeorm'
import { PaymentSession } from '../models/payment-session'

export const PaymentSessionRepository = (manager: EntityManager) => { return manager.getRepository(PaymentSession) }
