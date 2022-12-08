import { EntityManager, Repository } from 'typeorm'
import { Invite } from '../models/invite'

export const InviteRepository = (manager: EntityManager) => { return manager.getRepository(Invite) }
