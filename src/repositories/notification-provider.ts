import { EntityManager, Repository } from 'typeorm'
import { NotificationProvider } from '../models/notification-provider'

// eslint-disable-next-line max-len
export const NotificationProviderRepository = (manager: EntityManager) => { return manager.getRepository(NotificationProvider) }
