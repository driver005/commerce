import glob from 'glob'
import path from 'path'
import { asClass, asFunction, asValue } from 'awilix'

import formatRegistrationName from '../utils/format-registration-name'
import { ClassConstructor, MedusaContainer } from '../types/global'
import { AddressRepository } from '../repositories/address'

/**
 * Registers all models in the model directory
 */
export default ({ container }: { container: MedusaContainer }): void => {
    const corePath = '../repositories/*.js'

    const core = glob.sync(corePath, { cwd: __dirname })
    
    const manager = container.resolve('manager')

    core.forEach((fn) => {
        const loaded = require(fn) as FunctionConstructor

        Object.entries(loaded).map(
            ([, val]: [string, FunctionConstructor]) => {
                if (typeof val === 'function') {
                    const name = formatRegistrationName(fn)
                    container.register({
                        [name]: asFunction(() => val(manager)),
                    })
                }
            }
        )
    })
}
