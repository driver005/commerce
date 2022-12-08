import { flatten, groupBy, map, merge } from 'lodash'
import { EntityManager, FindManyOptions, In, Repository } from 'typeorm'
import { Cart } from '../models/cart'

export const CartRepository = (manager: EntityManager) => {
    return manager.getRepository(Cart).extend({
        async findWithRelations(
            relations: string[] = [],
            optionsWithoutRelations: Omit<FindManyOptions<Cart>, 'relations'> = {}
        ): Promise<Cart[]> {
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
            return map(entitiesAndRelationsById, (entityAndRelations) =>
                merge({}, ...entityAndRelations)
            )
        },

        async findOneWithRelations(
            relations: string[] = [],
            optionsWithoutRelations: Omit<FindManyOptions<Cart>, 'relations'> = {}
        ): Promise<Cart> {
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
