import { PriceSelectionContext } from '../interfaces/price-selection-strategy'
import { MoneyAmount, Product, ProductVariant, ShippingOption } from '../models'
import { TaxServiceRate } from './tax-service'

export type ProductVariantPricing = {
    prices: MoneyAmount[]
    original_price: number | null
    calculated_price: number | null
    original_price_includes_tax?: boolean | null
    calculated_price_includes_tax?: boolean | null
    calculated_price_type?: string | null
} & TaxedPricing

export type TaxedPricing = {
    original_price_incl_tax: number | null
    calculated_price_incl_tax: number | null
    original_tax: number | null
    calculated_tax: number | null
    tax_rates: TaxServiceRate[] | null
}

export type PricingContext = {
    price_selection: PriceSelectionContext
    automatic_taxes: boolean
    tax_rate: number | null
}

export type ShippingOptionPricing = {
    price_incl_tax: number | null
    tax_rates: TaxServiceRate[] | null
    tax_amount: number
}

export type PricedShippingOption = Partial<ShippingOption> &
    ShippingOptionPricing

export type PricedVariant = Partial<ProductVariant> & ProductVariantPricing

export type PricedProduct = Omit<Partial<Product>, 'variants'> & {
    variants: PricedVariant[]
}
