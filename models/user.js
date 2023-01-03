const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    pseudo: {
      type: DataTypes.STRING,
    },
    urlPicture: {
      type: DataTypes.TEXT,
    },
  });

  return User;
};
