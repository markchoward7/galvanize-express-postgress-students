const Pool = require('pg').Pool
const pool = new Pool({
    user: 'admin',
    password: 'admin',
    database: 'database_name',
    host: 'db',
    port: 5432,
})

function getStudents(req, res) {
    pool.query("SELECT * FROM students", (error, results) => {
        if (error) {
            res.status(400).send()
        } else {
            res.status(200).send(results.rows)
        }
    })
}

function getStudentById(req, res) {
    pool.query("SELECT * FROM students WHERE id = $1", [req.params.studentId], (error, results) => {
        if (error) {
            res.status(400).send()
        } else {
            res.status(200).send(results.rows)
        }
    })
}

function getStudentByName(req, res) {
    pool.query("SELECT * FROM students WHERE first_name = $1 OR last_name = $1", [req.query.search], (error, results) => {
        if (error) {
            res.status(400).send()
        } else {
            res.status(200).send(results.rows)
        }
    })
}

function getGradesByStudentId(req, res) {
    pool.query("SELECT * FROM grades WHERE student_id = $1", [req.params.studentId], (error, results) => {
        if (error) {
            res.status(400).send()
        } else {
            res.status(200).send(results.rows)
        }
    })
}

function postNewGrade(req, res) {
    pool.query("INSERT INTO grades (points, student_id) VALUES ($1, $2)", [req.body.points, req.body.studentId], (error, results) => {
        if (error) {
            res.status(400).send()
        } else {
            res.status(201).send()
        }
    })
}

function postNewStudent(req, res) {
    pool.query("INSERT INTO students (first_name, last_name) VALUES ($1, $2)", [req.body.firstName, req.body.lastName], (error, results) => {
        if (error) {
            res.status(400).send()
        } else {
            res.status(201).send()
        }
    })
}

exports.getStudents = getStudents
exports.getStudentById = getStudentById
exports.getStudentByName = getStudentByName
exports.getGradesByStudentId = getGradesByStudentId
exports.postNewGrade = postNewGrade
exports.postNewStudent = postNewStudent
// exports.modules = {
//     getStudents,
//     getStudentById,
//     getStudentByName,
//     getGradesByStudentId,
//     postNewGrade,
//     postNewStudent
// }