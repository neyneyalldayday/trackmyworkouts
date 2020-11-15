const express = require("express");
const logg = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app =express();
 app.use(logg("dev"));
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 app.use(express.static("public"));

 mongoose.connect(process.envMONGODB_URI || "mongodb://localhost/workout", {
     useNewUrlParser: true,
     useFindAndModify: false
 });

 require("./routes/html-routes.js")(app);
 require("./routes/api-routes.js")(app);

 app.listen(PORT, () => {
     console.log(`running on port ${PORT}!`);
 });