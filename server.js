// Dependencies.
// =====================================================
const express = require("express");

// Port/Heroku variables.
// =====================================================
const PORT = process.env.PORT || 8080;
const app = express();

// Serve static content for the app.
// =====================================================
app.use(express.static("public"));

// Parse application body as JSON (aka middleware).
// =====================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Making Handlebars.  Setting/Activating.
// =====================================================
const expressHandleBars = require("express-handlebars");

// Not entirely sure what this does.  Looks like it's setting the default handlebar file.  Named main.
// =====================================================
app.engine("handlebars", expressHandleBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Importing Routes to give to the server.
// =====================================================
const routes = require("./controllers/burgers_controller");
app.use(routes);

// Starting server.  Listening.
// =====================================================
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
