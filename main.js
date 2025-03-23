const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", 'ejs')
app.set('views', path.join(__dirname, 'views'));



app.get('/', (req, res) => {
    res.render('index')
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/login-form', (req, res) => {
    console.log(req.body)
    res.send("data recived")
})
app.post('/register-Form', (req, res) => {
    console.log(req.body)
    res.send("data recived")
})


app.get('/about', (req, res) => {
    res.send("The about page")
})

app.listen(5000)