"use strict"

import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm'

export class ShortenedNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
    eagerJoinRelationAlias(alias: string, propertyPath: string): string {
        const path = propertyPath
            .split('.')
            .map((p) => p.substring(0, 2))
            .join('_')
        const out = alias + '_' + path
        const match = out.match(/_/g) || []
        return out + match.length
    }
}
