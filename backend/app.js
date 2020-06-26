const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const queries = require('./queries')


const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.get('/', (req, res) => {
    res.send("It's alive!")
})

app.get('/student', (req, res) => {
    if (req.query.search) {
        queries.getStudentByName(req, res)
    } else {
        queries.getStudents(req, res)
    }
})

app.get('/students/:studentId', (req, res) => {
    queries.getStudentById(req, res)
})

app.get('/grades/:studentId', (req, res) => {
    queries.getGradesByStudentId(req, res)
})

app.post('/grades', (req, res) => {
    queries.postNewGrade(req, res)
})

app.post('/register', (req, res) => {
    queries.postNewStudent(req, res)
})

const port = 3000
app.listen(port, () => console.log('App listening'))