import { flatten, groupBy, map, merge } from 'lodash'
import { EntityManager, FindManyOptions, In, Repository } from 'typeorm'
import { Swap } from '../models/swap'

export const SwapRepository = (manager: EntityManager) => {
    return manager.getRepository(Swap).extend({
        async findWithRelations(
            relations: Array<keyof Swap> = [],
            optionsWithoutRelations: Omit<FindManyOptions<Swap>, 'relations'> = {}
        ): Promise<Swap[]> {
            const entities = await this.find(optionsWithoutRelations)
            const entitiesIds = entities.map(({ id }) => id)

            const groupedRelations = {}
            for (const rel of relations) {
                const [topLevel] = rel.split('.')
                if (groupedRelations[topLevel]) {
                    groupedRelations[topLevel].push(rel)
                } else {
                    groupedRelations[topLevel] = [rel]
                }
            }
            //TODO: See if works
            const entitiesIdsWithRelations = await Promise.all(
                Object.entries(groupedRelations).map(async ([_, rels]) => {
                    return this.find({
                        where: { id: In(entitiesIds) },
                        select: ['id'],
                        relations: rels as string[],
                    })
                })
            ).then(flatten)

            const entitiesAndRelations = entitiesIdsWithRelations.concat(entities)

            const entitiesAndRelationsById = groupBy(entitiesAndRelations, 'id')

            return map(entities, (e) =>
                merge({}, ...entitiesAndRelationsById[e.id])
            )
        },

        async findOneWithRelations(
            relations: Array<keyof Swap> = [],
            optionsWithoutRelations: Omit<FindManyOptions<Swap>, 'relations'> = {}
        ): Promise<Swap> {
            // Limit 1
            optionsWithoutRelations.take = 1

            const result = await this.findWithRelations(
                relations,
                optionsWithoutRelations
            )
            return result[0]
        }
    })
}
