const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
var session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local');
const flash = require('connect-flash')
const User = require('./models/user')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }))
app.use(flash())
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    next();
})
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
mongoose.connect('mongodb://localhost:27017/IQACFormDemo')
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
    req.flash('success', 'Successfully registered!!')
    res.send(newUser);
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
    res.render('./foodProvider/donarPage')
})

app.post('/donarform', (req, res) => {
    res.send(req.body)
})

app.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', "GoodBye!")
    res.redirect('/');
})

app.listen(3000, (req, res) => {
    console.log("Running...")
})