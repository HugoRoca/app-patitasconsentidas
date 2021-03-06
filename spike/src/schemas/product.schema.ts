/* eslint-disable @typescript-eslint/camelcase */
import Joi from "@hapi/joi"

export default {
  CREATE_APPLICATION_BODY: Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    image: Joi.string(),
    type_unit: Joi.string().required(),
    quantity: Joi.number().required(),
    sale_price: Joi.number().required(),
    buy_price: Joi.number().required(),
    type_pet: Joi.string(),
    category: Joi.string(),
    sub_category: Joi.string(),
    brand: Joi.string(),
    size: Joi.string(),
    color: Joi.string(),
    type_product: Joi.string(),
    in_offer: Joi.boolean().required(),
  }),
}
