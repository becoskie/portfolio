var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    console.log("INDEX!!!!");
    res.render("index");
  });
  app.get("/signup", function(req, res) {
    res.render("signup");
  });
  app.get("/signin", function(req, res) {
    res.render("signin");
  });

  app.get("/admin", function(req, res) {
    console.log("Admin!!!!");
    db.project.findAll({}).then(function(dbProjects) {
      console.log(dbProjects);
      res.render("admin", {
        msg: "Welcome!",
        projects: dbProjects
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
