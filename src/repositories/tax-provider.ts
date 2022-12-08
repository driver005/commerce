import { EntityManager, Repository } from 'typeorm'
import { TaxProvider } from '../models/tax-provider'

export const TaxProviderRepository = (manager: EntityManager) => { return manager.getRepository(TaxProvider) }
