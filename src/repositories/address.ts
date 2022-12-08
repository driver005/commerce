import { EntityManager, Repository } from 'typeorm'
import { Address } from '../models/address'


export const AddressRepository = (manager: EntityManager) => {
    return manager.getRepository(Address)
}