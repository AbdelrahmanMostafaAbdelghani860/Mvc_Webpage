const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.use(express.urlencoded({ extended: true }));
const Article = require("./models/websiteSchema");
const Contact = require("./models/contactform");
// for live reload
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
// Mongoose
const mongoose = require("mongoose");
const { render } = require("ejs");

mongoose
  .connect("mongodb://localhost:27017")
  .then((result) => {
    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
mongoose.set("strictQuery", true);

app.get("/home", (req, res) => {
  res.render("index");
});
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/service", (req, res) => {
  res.render("service");
});

app.post("/contact", (req, res) => {
  const article = new Article(req.body);
  console.log(req.body);
  article
    .save()
    .then((result) => {
      res.render("sucess");
    })
    .catch((err) => {
      res.render("erorr");
    });
});
app.post("/home", (req, res) => {
  const contact = new Contact(req.body);
  console.log(req.body);
  contact
    .save()
    .then((result) => {
      res.render("sucess");
    })
    .catch((err) => {
      res.render("erorr");
    });
});
app.use((req, res, next) => {
  res.status(404).render("erorr");
});
