import { EntityManager, Repository } from 'typeorm'
import { PaymentProvider } from '../models/payment-provider'

export const PaymentProviderRepository = (manager: EntityManager) => { return manager.getRepository(PaymentProvider) }
