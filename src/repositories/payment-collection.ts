import { MedusaError } from 'medusa-core-utils'
import { PaymentCollection } from './../models/payment-collection'
import { EntityManager, FindManyOptions, Repository } from 'typeorm'
import { FindConfig } from '../types/common'
import { PaymentSession } from '../models'

// eslint-disable-next-line max-len
export const PaymentCollectionRepository = (manager: EntityManager) => {
    return manager.getRepository(PaymentCollection).extend({
        async getPaymentCollectionIdBySessionId(
            sessionId: string,
            config: FindConfig<PaymentCollection> = {}
        ): Promise<PaymentCollection> {
            const paymentCollection = await this.find({
                join: {
                    alias: 'payment_col',
                    innerJoin: { payment_sessions: 'payment_col.payment_sessions' },
                },
                where: (qb) => {
                    qb.where(
                        'payment_col_payment_sessions.payment_session_id = :sessionId',
                        { sessionId }
                    )
                },
                relations: config.relations,
                select: config.select,
            } as FindManyOptions<PaymentCollection>)

            if (!paymentCollection.length) {
                throw new MedusaError(
                    MedusaError.Types.NOT_FOUND,
                    `Payment collection related to Payment Session id ${sessionId} was not found`
                )
            }

            return paymentCollection[0]
        },

        async getPaymentCollectionIdByPaymentId(
            paymentId: string,
            config: FindConfig<PaymentCollection> = {}
        ): Promise<PaymentCollection> {
            const paymentCollection = await this.find({
                join: {
                    alias: 'payment_col',
                    innerJoin: { payments: 'payment_col.payments' },
                },
                where: (qb) => {
                    qb.where('payment_col_payments.payment_id = :paymentId', {
                        paymentId,
                    })
                },
                relations: config.relations,
                select: config.select,
            } as FindManyOptions<PaymentCollection>)

            if (!paymentCollection.length) {
                throw new MedusaError(
                    MedusaError.Types.NOT_FOUND,
                    `Payment collection related to Payment id ${paymentId} was not found`
                )
            }

            return paymentCollection[0]
        },

        async deleteMultiple(ids: string[]): Promise<void> {
            await this.createQueryBuilder()
                .delete()
                .from(PaymentSession)
                .where('id IN (:...ids)', { ids })
                .execute()
        }
    })
}
