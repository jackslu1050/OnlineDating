const express = require("express");
var exphbs = require("express-handlebars");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  //res.send("Hello world");
  res.render("index", {
    title: "Home",
  });
});
app.get("/about", (req, res) => {
  //res.send("Hello world");
  res.render("about", {
    title: "About",
  });
});
app.get("/contact", (req, res) => {
  //res.send("Hello world");
  res.render("contact", {
    title: "Contact",
  });
});
app.get("/newAccount", (req, res) => {
  res.render("newAccount", {
    title: "Signup",
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
