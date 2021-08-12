const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connections");

class User extends Model {
  checkPassword(login) {
    return bcrypt.compareSync(login, this.password);
  }
}

User.init(
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },

  {
    hooks: {
      beforeCreate: async (UserData) => {
        UserData.password = await bcrypt.hash(UserData.password, 10);
        return UserData;
      },
      beforeUpdate: async (UserData) => {
        UserData.password = await bcrypt.hash(UserData.password, 10);
        return UserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "User",
  }
);

module.exports = User;
