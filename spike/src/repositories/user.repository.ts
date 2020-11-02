import db from "../models/db"
// import { User } from "../models/user.model"

class UserRepository {
  async getAll() {
    return await db.User.findAll()
  }
}

export default UserRepository
