module.exports = function(sequelize, Sequelize) {
  var Project = sequelize.define("project", {
    project_id: {
      type: Sequelize.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    title: {
      type: Sequelize.STRING,
      allowNull: false
    },

    shortDesc: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    longDesc: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    projectOps: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    buildItems: {
      type: Sequelize.STRING,
      allowNull: false
    },

    projectType: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    launchLink: {
      type: Sequelize.STRING,
      allowNull: false
    },

    gitLink: {
      type: Sequelize.STRING,
      allowNull: false
    },

    dataLink: {
      type: Sequelize.STRING,
      allowNull: false
    },

    svgLink: {
      type: Sequelize.STRING,
      allowNull: false
    },

    imgLink: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });

  return Project;
};
