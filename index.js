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

// app.get("/", (req, res)=>{
//   res.render("fluidCalculator", {title: "Fluid Calculator"});
// });

// app.get("/fluidCalculator", {function(res, req) 
//   {res.render("fluidCalculator")}
// });

//server activation
app.listen(port, ()=>{
  console.log('Listening to requests on localhost:' + port);
});

//app configurtion 
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
