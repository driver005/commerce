import { EntityManager, Repository } from 'typeorm'
import { AnalyticsConfig } from '../models/analytics-config'

export const AnalyticsConfigRepository = (manager: EntityManager) => { return manager.getRepository(AnalyticsConfig) }
