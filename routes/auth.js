var authController = require("../controllers/authcontroller.js");

module.exports = function(app, passport) {
  app.get("/signup", authController.signup);
  app.get("/signin", authController.signin);
  app.get("/admin", isLoggedIn, authController.admin);
  app.get("/logout", authController.logout);
  app.get("/create", isLoggedIn, authController.create);
  app.get("/edit", isLoggedIn, authController.edit);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/admin",
      failureRedirect: "/signup"
    })
  );

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/admin",
      failureRedirect: "/signin"
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/signin");
  }
};
