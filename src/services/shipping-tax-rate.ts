import { EntityManager } from 'typeorm'
import { ShippingTaxRate } from '../models'
import { ShippingTaxRateRepository } from '../repositories/shipping-tax-rate'
import { FindConfig } from '../types/common'
import { FilterableShippingTaxRateProps } from '../types/shipping-tax-rate'
import { TransactionBaseService } from '../interfaces'
import { buildQuery } from '../utils'

type ShippingTaxRateServiceProps = {
    manager: EntityManager
    shippingTaxRateRepository: ReturnType<typeof ShippingTaxRateRepository>
}

class ShippingTaxRateService extends TransactionBaseService {
    protected manager_: EntityManager
    protected transactionManager_: EntityManager | undefined

    protected readonly shippingTaxRateRepository_: ReturnType<typeof ShippingTaxRateRepository>

    constructor({ manager, shippingTaxRateRepository }: ShippingTaxRateServiceProps) {
        super(arguments[0])

        this.manager_ = manager
        this.shippingTaxRateRepository_ = shippingTaxRateRepository
    }

    /**
     * Lists Shipping Tax Rates given a certain query.
     * @param selector - the query object for find
     * @param config - query config object for variant retrieval
     * @return the result of the find operation
     */
    async list(
        selector: FilterableShippingTaxRateProps,
        config: FindConfig<ShippingTaxRate> = {
            relations: [],
            skip: 0,
            take: 20,
        }
    ): Promise<ShippingTaxRate[]> {
        const sTaxRateRepo = this.manager_.withRepository(
            this.shippingTaxRateRepository_
        )

        const query = buildQuery(selector, config)

        return await sTaxRateRepo.find(query)
    }
}

export default ShippingTaxRateService
