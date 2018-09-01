module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("user", {
    user_id: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    username: {
      type: Sequelize.STRING(50),
      allowNull: false
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false
    },

    url: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });

  return User;
};
