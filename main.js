let express = require("express");
let app = express();
let ejs = require("ejs");
let passport = require("passport");
let path = require("path");
let bodyParser = require("body-parser");
let session = require("express-session");
let CookieParser = require("cookie-parser");
const cookieParser = require("cookie-parser");
const publicPath = path.join(__dirname, "./views");
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("start app on port 3000!");
});
app.get("/", (req, res) => {
  res.render("Index");
});
app.get("/signIn", (req, res) => {
  res.render("signIn");
});

// session middleware
app.use(session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true } 
}));
// cookie-parser middleware
app.use(cookieParser());
// defined 404 not found page
app.use((req , res) => {
  res.status(404).render("404")
});


app.post('/SignIn', () => {
  
});