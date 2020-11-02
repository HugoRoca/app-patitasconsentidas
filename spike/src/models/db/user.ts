import { Model, DataTypes } from "sequelize"

class User extends Model {
  key!: string
  username!: string
  password!: string
  description!: string
}

export default (database: any) => {
  User.init(
    {
      key: { type: DataTypes.STRING },
      username: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING },
    },
    {
      tableName: "Users",
      sequelize: database,
    }
  )

  return User
}
