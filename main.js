const express = require('express')
const app = express()

app.set("view engine", 'ejs')

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