import { asFunction } from 'awilix'
import glob from 'glob'
import path from 'path'
import { ConfigModule, MedusaContainer } from '../types/global'
import { isDefined } from '../utils'
import formatRegistrationName from '../utils/format-registration-name'

type Options = {
    container: MedusaContainer
    configModule: ConfigModule
    isTest?: boolean
}

/**
 * Registers all services in the services directory
 */
export default ({ container, configModule, isTest }: Options): void => {
    const useMock = isDefined(isTest) ? isTest : process.env.NODE_ENV === 'test'

    const corePath = useMock ? '../services/__mocks__/*.js' : '../services/*.js'

    const core = glob.sync(corePath, { cwd: __dirname })

    core.forEach((fn) => {
        const loaded = require(fn).default
        if (loaded) {
            const name = formatRegistrationName(fn)
            container.register({
                [name]: asFunction(
                    (cradle) => {
                        return new loaded(cradle, configModule)
                    }
                ).singleton(),
            })
        }
    })
}
