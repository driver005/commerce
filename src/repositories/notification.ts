import { EntityManager, Repository } from 'typeorm'
import { Notification } from '../models/notification'

export const NotificationRepository = (manager: EntityManager) => { return manager.getRepository(Notification) }
