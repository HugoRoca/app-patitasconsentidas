export interface Product {
  product_code: string
  name: string
  description: string
  image: string
  type_unit: string
  quantity: number
  sale_price: number
  buy_price: number
  type_pet: string
  category: string
  sub_category: string
  brand: string
  size: string
  color: string
  type_product: string
  in_offer: boolean
  state?: boolean
}
