var exports = (module.exports = {});
var db = require("../models");

exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req, res) {
  res.render("signin");
};

exports.admin = function(req, res) {
  db.project.findAll({}).then(function(dbProjects) {
    res.render("admin", {
      projects: dbProjects
    });
  });
};

exports.create = function(req, res) {
  res.render("create");
};

exports.edit = function(req, res) {
  db.project
    .findOne({ where: { project_id: req.params.id } })
    .then(function(data) {
      res.render("edit", {
        project: data
      });
    });
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
