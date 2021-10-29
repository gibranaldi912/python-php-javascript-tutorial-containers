let session = require("express-session");
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat',
  multipleStatements: true
});

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.post("/signin", (req, res) => {
  connection.query(
    "SELECT * FROM cn_user WHERE username = ? AND password = ?",
    [htmlspecialchars(req.body.username), htmlspecialchars(req.body.password)],
    (error, results) => {
      if (results.length > 0) {
        req.session.loggedin = true;
        req.session.username = results[0].username;
        req.session.name = results[0].name;
        req.session.id_user = results[0].id_user;
        req.session.information = htmlspecialchars_decode(
          results[0].information
        );
        req.session.img_profile = results[0].img_profile;

        req.flash("login", 1);
        res.redirect("/list");
      } else {
        req.flash("login", "Wrong Password or Username!");
        res.redirect("/");
      }
    }
  );
});
