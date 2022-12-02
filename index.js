const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('./dashboard')
})

app.listen(3000, (req, res) => {
    console.log("Running...")
})