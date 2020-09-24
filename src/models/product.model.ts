export interface Product {
  product_code: string
  name: string
  description: string
  image: string
  type_unit: string
  quantity: number
  sale_price: number
  state?: boolean
}
