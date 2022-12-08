import { EntityManager } from "typeorm"
import { DiscountService, DraftOrderService, EventBusService, GiftCardService, OrderService, RegionService, TotalsService } from "../services"

class OrderSubscriber {
    private readonly manager_: EntityManager
    private readonly totalsService_: TotalsService
    private readonly discountService_: DiscountService
    private readonly giftCardService_: GiftCardService
    private readonly orderService_: OrderService
    private readonly draftOrderService_: DraftOrderService
    private readonly regionService_: RegionService
    private readonly eventBusService_: EventBusService

    constructor({
        manager,
        eventBusService,
        discountService,
        giftCardService,
        totalsService,
        orderService,
        draftOrderService,
        regionService,
    }) {
        this.manager_ = manager
        this.totalsService_ = totalsService

        this.discountService_ = discountService

        this.giftCardService_ = giftCardService

        this.orderService_ = orderService

        this.draftOrderService_ = draftOrderService

        this.regionService_ = regionService

        this.eventBusService_ = eventBusService

        this.eventBusService_.subscribe('order.placed', this.handleOrderPlaced)

        this.eventBusService_.subscribe('order.placed', this.updateDraftOrder)
    }

    handleOrderPlaced = async (data) => {
        const order = await this.orderService_.retrieve(data.id, {
            select: ['subtotal'],
            relations: ['discounts', 'discounts.rule', 'items', 'gift_cards'],
        })

        await Promise.all(
            order.items.map(async (i) => {
                if (i.is_giftcard) {
                    for (let qty = 0; qty < i.quantity; qty++) {
                        await this.giftCardService_.create({
                            region_id: order.region_id,
                            order_id: order.id,
                            value: i.unit_price,
                            balance: i.unit_price,
                            metadata: i.metadata,
                        })
                    }
                }
            })
        )

        await Promise.all(
            order.discounts.map(async (d) => {
                const usageCount = d?.usage_count || 0
                return this.discountService_.update(d.id, {
                    usage_count: usageCount + 1,
                })
            })
        )
    }

    updateDraftOrder = async (data) => {
        const order = await this.orderService_.retrieve(data.id)
        const draftOrder = await this.draftOrderService_
            .retrieveByCartId(order.cart_id)
            .catch((_) => null)

        if (draftOrder) {
            await this.draftOrderService_.registerCartCompletion(
                draftOrder.id,
                order.id
            )
        }
    }
}

export default OrderSubscriber
