import { EntityManager, Repository } from 'typeorm'
import { Note } from '../models/note'

export const NoteRepository = (manager: EntityManager) => { return manager.getRepository(Note) }
