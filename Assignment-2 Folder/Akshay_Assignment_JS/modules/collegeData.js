const fs = require("fs") 
class Data {
    constructor(students, courses) {
        this.students = students
        this.courses = courses
    }
}
let dataCollection = null

function initialize() {
    return new Promise((resolve, reject) => {
        fs.readFile("./data/students.json", "utf8", (err, studentDataFromFile) => {
            if (err) {
                reject("file not found--student.json")
                return
            }
            fs.readFile("./data/courses.json", "utf8", (err, courseDataFromFile) => {
                if (err) {
                    reject("file not found--courses.json")
                    return
                }
                let studentData = JSON.parse(studentDataFromFile)
                let courseData = JSON.parse(courseDataFromFile)
                dataCollection = new Data(studentData, courseData)
                resolve()
            })
        })
    })
}
function getAllStudents() {
    return new Promise((resolve, reject) => {
        if (dataCollection.students.length > 0) {
            resolve(dataCollection.students)
        } else {
            reject("No results ret")
        }
    })
}
function getCourses() {
    return new Promise((resolve, reject) => {
        if (dataCollection.courses.length > 0) {
            resolve(dataCollection.courses)
        } else {
            reject("No results")
        }
    })
}
function getTAs() {
    return new Promise((resolve, reject) => {
        const tas = dataCollection.students.filter(student => student.TA)
        if (tas.length > 0) {
            resolve(tas)
        } else {
            reject("No results returned")
        }
    })
}
module.exports = {
    initialize,
    getAllStudents,
    getCourses,
    getTAs
}