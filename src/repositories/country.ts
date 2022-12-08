import { EntityManager, Repository } from 'typeorm'
import { Country } from '../models/country'

export const CountryRepository = (manager: EntityManager) => { return manager.getRepository(Country) }
