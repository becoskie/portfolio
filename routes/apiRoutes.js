var db = require("../models");

module.exports = function(app) {
  // create a new project
  app.post("/api/project", function(req, res) {
    db.project.create(req.body).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // Get all projects
  app.get("/api/projects/:id", function(req, res) {
    db.project
      .findOne({ where: { project_id: req.params.id } })
      .then(function(data) {
        rres.json(data);
      });
  });

  app.get("/api/projects", function(req, res) {
    db.project.findAll({}).then(function(dbProjects) {
      res.json(dbProjects);
    });
  });

  app.put("/api/projects", function(req, res) {
    db.project
      .update(req.body, {
        where: {
          project_id: req.body.projectId
        }
      })
      .then(function(data) {
        res.json(data);
      });
  });

  // Delete an example by id
  app.delete("/api/project/:id", function(req, res) {
    db.project
      .destroy({ where: { project_id: req.params.id } })
      .then(function(dbProjects) {
        res.json(dbProjects);
      });
  });
};
