var exports = (module.exports = {});

exports.signup = function(req, res) {
  res.render("signup");
};

exports.signin = function(req, res) {
  res.render("signin");
};

exports.admin = function(req, res) {
  res.render("admin",{ username: req.user.username, signedin: true });
};

exports.create = function(req, res) {
  res.render("create");
};

exports.edit = function(req, res) {
  res.render("edit");
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect("/");
  });
};
