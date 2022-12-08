import { EntityManager, Repository } from 'typeorm'
import { User } from '../models/user'

export const UserRepository = (manager: EntityManager) => { return manager.getRepository(User) }
