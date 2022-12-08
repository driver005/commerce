import { EntityManager, Repository } from 'typeorm'
import { Oauth } from '../models/oauth'

export const OauthRepository = (manager: EntityManager) => { return manager.getRepository(Oauth) }
