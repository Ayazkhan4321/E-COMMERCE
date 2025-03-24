const express = require('express')
const app = express()
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));

app.set("view engine", 'ejs')
app.set('views', path.join(__dirname, 'views'));



app.get('/', (req, res) => {
    res.render('index')
})
app.get('/home', (req, res) => {
    res.render('home')
})

app.post('/login-form', (req, res) => {
    console.log(req.body);
    res.redirect('/home');
})
app.post('/register-Form', (req, res) => {
    console.log(req.body)
    res.send("data recived")
})


app.get('/about', (req, res) => {
    res.send("The about page")
})

app.listen(3000)