const express = require("express");
const app = express();

const graphql = require("graphql");
const graphqlHTTP = require("express-graphql");
const graphqlSchema = require("./services/graphql/schema");

const cors = require("cors");

app.use("*", cors({ origin: "http://localhost:3000", credentials: true }));

const passport = require("passport");
require("./services/passport");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

const { cookieKey } = require("./config/keys");
var session = require("express-session");
var sess = {
  secret: cookieKey,
  resave: false,
  saveUninitialized: false,
  maxAge: 30 * 24 * 60 * 60 * 1000,
  cookie: {}
};

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

app.use(session(sess));

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true
  })
);

app.get("/api/user", (req, res) => {
  console.log(req.user);
  return "hello";
});
// For deployment setup
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
