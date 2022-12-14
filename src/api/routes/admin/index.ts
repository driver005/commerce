import cors from 'cors'
import { Router, Express } from 'express'
import middlewares from '../../middlewares'
import analyticsConfigs from './analytics-configs'
import appRoutes from './apps'
import authRoutes from './auth'
import batchRoutes from './batch'
import collectionRoutes from './collections'
import currencyRoutes from './currencies'
import customerGroupRoutes from './customer-groups'
import customerRoutes from './customers'
import discountRoutes from './discounts'
import draftOrderRoutes from './draft-orders'
import giftCardRoutes from './gift-cards'
import inviteRoutes, { unauthenticatedInviteRoutes } from './invites'
import noteRoutes from './notes'
import notificationRoutes from './notifications'
import orderEditRoutes from './order-edits'
import orderRoutes from './orders'
import priceListRoutes from './price-lists'
import productTagRoutes from './product-tags'
import productTypesRoutes from './product-types'
import publishableApiKeyRoutes from './publishable-api-keys'
import productRoutes from './products'
import regionRoutes from './regions'
import returnReasonRoutes from './return-reasons'
import returnRoutes from './returns'
import salesChannelRoutes from './sales-channels'
import shippingOptionRoutes from './shipping-options'
import shippingProfileRoutes from './shipping-profiles'
import storeRoutes from './store'
import swapRoutes from './swaps'
import taxRateRoutes from './tax-rates'
import uploadRoutes from './uploads'
import userRoutes, { unauthenticatedUserRoutes } from './users'
import variantRoutes from './variants'
import paymentCollectionRoutes from './payment-collections'
import paymentRoutes from './payments'
import { MiddlewareService } from '../../../services'
import { ConfigModule } from '../../../types/global'
import { AwilixContainer } from 'awilix'
import { FlagRouter } from '../../../utils/flag-router'

const route = Router()

export default (app: Router, container: AwilixContainer, config: ConfigModule) => {
    app.use('/admin', route)

    const adminCors = config.projectConfig.admin_cors || ''
    route.use(
        cors({
            origin: adminCors.split(','),
            credentials: true,
        })
    )

    const featureFlagRouter = container.resolve<FlagRouter>('featureFlagRouter')

    // Unauthenticated routes
    authRoutes(route)

    // reset password
    unauthenticatedUserRoutes(route)

    // accept invite
    unauthenticatedInviteRoutes(route)

    const middlewareService = container.resolve<MiddlewareService>('middlewareService', {allowUnregistered:true})
    // Calls all middleware that has been registered to run before authentication.
    middlewareService?.usePreAuthentication(app)

    // Authenticated routes
    route.use(middlewares.authenticate())

    // Calls all middleware that has been registered to run after authentication.
    middlewareService?.usePostAuthentication(app)

    analyticsConfigs(route)
    appRoutes(route)
    batchRoutes(route)
    collectionRoutes(route)
    customerGroupRoutes(route)
    customerRoutes(route)
    currencyRoutes(route)
    discountRoutes(route)
    draftOrderRoutes(route)
    giftCardRoutes(route)
    inviteRoutes(route)
    noteRoutes(route)
    notificationRoutes(route)
    orderRoutes(route, featureFlagRouter)
    orderEditRoutes(route)
    priceListRoutes(route, featureFlagRouter)
    productRoutes(route, featureFlagRouter)
    productTagRoutes(route)
    productTypesRoutes(route)
    publishableApiKeyRoutes(route)
    regionRoutes(route, featureFlagRouter)
    returnReasonRoutes(route)
    returnRoutes(route)
    salesChannelRoutes(route)
    shippingOptionRoutes(route, featureFlagRouter)
    shippingProfileRoutes(route)
    storeRoutes(route)
    swapRoutes(route)
    taxRateRoutes(route)
    uploadRoutes(route)
    userRoutes(route)
    variantRoutes(route)
    paymentCollectionRoutes(route)
    paymentRoutes(route)

    return app
}
