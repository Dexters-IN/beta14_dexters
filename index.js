if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
var session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local');
const User = require('./models/user')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'thisisdemosessionexample', resave: false, saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
const DonarSchema = require('./models/donarhistory');
// const { find } = require('./models/user');
const DonarHistory = require('./models/donarhistory');
mongoose.connect('mongodb://localhost:27017/MANITDemo')
    .then(() => {
        console.log("Connection Opended!!")
    })
    .catch(err => {
        console.log("Error, Please Check...")
        console.log(err)
    })


const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}

app.get('/', (req, res) => {
    res.render('./dashboard')
})

app.get('/register', (req, res) => {
    res.render("./LoginPage/register")
})

app.post('/register', async (req, res) => {
    const user = new User(req.body)
    const newUser = await User.register(user, req.body.password)
    // res.send(newUser);
    res.redirect('/')
    // res.send(req.body)
})

app.get("/login", (req, res) => {
    res.render('./LoginPage/login')
})

app.post('/login', passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
    // res.send(req.body);
    res.redirect('/');
})

app.get('/donarform', isLoggedIn, (req, res) => {
    res.render('./foodProvider/donarform')
    // throw console.error('some');
})

app.post('/donarform', isLoggedIn, async (req, res) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    console.log(today);
    const newData = req.body;
    newData.username = req.user.username;
    newData.date = today;
    const userData = new DonarSchema(newData);
    await userData.save();
    res.redirect('/donarpage');
})

app.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

app.get('/donarpage', isLoggedIn, async (req, res) => {
    const userDetails = await User.find({ username: req.user.username });
    console.log(userDetails)
    const history = await DonarHistory.find({ username: req.user.username })
    console.log(history);
    res.render('./dashboard/donarDashboard', { history })
    // res.send('work')
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong... Please try again...' } = err;
    res.status(status).render(__dirname + '/error');
})

app.get('*', (req, res) => {
    res.redirect('/');
})

app.listen(3000, (req, res) => {
    console.log("Running...")
})