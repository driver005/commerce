import { EntityManager, Repository } from 'typeorm'
import { LineItemAdjustment } from '../models/line-item-adjustment'

// eslint-disable-next-line max-len
export const LineItemAdjustmentRepository = (manager: EntityManager) => { return manager.getRepository(LineItemAdjustment) }
