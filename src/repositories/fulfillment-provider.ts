import { EntityManager, Repository } from 'typeorm'
import { FulfillmentProvider } from '../models/fulfillment-provider'

// eslint-disable-next-line max-len
export const FulfillmentProviderRepository = (manager: EntityManager) => { return manager.getRepository(FulfillmentProvider) }
