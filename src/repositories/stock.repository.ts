import db from "../models/db"
import { Stock } from "../models/stock.model"

class StockRepository {
  async create(model: Stock) {
    return await db.Stock.create<any>(model)
  }
}

export default StockRepository
