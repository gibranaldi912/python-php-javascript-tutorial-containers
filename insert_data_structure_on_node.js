// mengimpor paket yang dibutuhkan
let express = require('express');
let session = require('express-session');
let app = express();

let server = require('http').createServer(app);
const mysql = require('mysql');
const jquery = require('jquery');
let flash = require('connect-flash');
// proses import done

// proses mendaftarkan modul - setting agar package session dan connect-flash bisa digunakan
app.use(session({
    secret: 'inponow',
    saveUninitialized: true,
    resave: true
}));

app.use(flash());
// end setting session

// setting agar framework exporess bisa digunakan
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: false
}));
// end setting express

// setting views engine
app.set('views', './views');
app.set('view engine', 'ejs');
// end setting view

// isikan username dan password database dengan benar
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chat',
});
// end settingd database connection

// nanti aplikasi dapat dilajankan melalui port 5000
server.listen(5000);
console.log('Server sedang Berjalan...')
// end port setting

// setting halaman utama web
app.get('/', function(req, res) {
    res.render('indexu', {
        session_flash: req.flash('signup_success')[0]
    });
})
// end setting halaman utama

// menerima post data dari form register dilanjutkan melakukan insert ke database
app.post('/signup', (req, res) => {
    connection.query(
        'INSERT INTO cn_user (username, name, password) VALUES (?, ?, ?)',
        [req.body.username, req.body.name, req.body.password],
        (error, results) => {
            if (results.affectedRows) {
                req.flash('signup_success', 'Successfully added account...');
            } else {
                req.flash('signup_success', 'Something wring when added account...');
            }
            res.redirect('/');
        }
    )
});
//end insert from post register
