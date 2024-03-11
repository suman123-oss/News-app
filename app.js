const express = require("express");

const app = express();

//static files:
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

//middleware:
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//templetaing engine:
app.set("views", "./src/views");
app.set("view engine", "ejs");

//routes:
const newsroute=require('./src/routes/news');

app.use('/', newsroute);
app.use('/search', newsroute);


//listen:
app.listen(3000, () => {
  console.log(`app is listening on port 3000`);
});
