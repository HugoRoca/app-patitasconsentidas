import UserRepository from "../repositories/user.repository"

const userRepository = new UserRepository()

class UserService {
  async getAll() {
    return await userRepository.getAll()
  }
}

export default UserService
