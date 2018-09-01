module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("user", {
    user_id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    username: {
      type: Sequelize.TEXT
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return User;
};
