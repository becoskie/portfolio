var db = require("../models");

module.exports = function(app) {
  app.post("/api/project", function(req, res) {
    console.log(req.body);
    db.project.create(req.body).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // Get all examples
  app.get("/api/projects", function(req, res) {
    db.project.findAll({}).then(function(dbProjects) {
      res.json(dbProjects);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
