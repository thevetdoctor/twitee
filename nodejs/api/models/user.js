'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: new DataTypes.UUIDV4(),
      unique: true,
      primaryKey: true
    },    
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      unique: {
        args: true,
        msg: "Email address already in use!"
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
}; 