//external modules

const express = require("express");
const path = require("path");

//App Variables
const app = express();
const port = process.env.PORT || "8000";

//routes
app.get("/", (req, res)=>{
  res.render("index", {title: "Home"});
});

app.get("/childOrNeonate", (req, res)=>{
  res.render("childOrNeonate", {title: "Child Or Neonate"});
});

app.get("/fluidCalculator", (req, res)=>{
  res.render("fluidCalculator", {title: "Fluid Calculator"});
});

app.get("/fluidChoice", (req, res)=>{
  res.render("fluidChoice", {title: "Fluid Choice"});
});

app.get("/fluidBalance", (req, res)=>{
  res.render("fluidBalance", {title: "Fluid Balance"});
});

app.get("/fluidReview", (req, res)=>{
  res.render("fluidReview", {title: "Fluid Review"});
});

app.get("/otherAssessments", (req, res)=>{
  res.render("otherAssessments", {title: "Other Assessments"});
});

app.get("/recordBloodSugar", (req, res)=>{
  res.render("recordBloodSugar", {title: "Record Blood Sugar"});
});

//server activation
app.listen(port, ()=>{
  console.log('Listening to requests on localhost:' + port);
});

//app configurtion 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
