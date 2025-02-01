/***************************************************************
 * WEB700 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: AKSHAY NEDUMPARAMBIL UNNIKRISHNAN Student ID: 190685285 Date: 31-01-2025
 *
 ***************************************************************/
let collegeData = require("./modules/collegeData")
collegeData.initialize().then(() => {
        console.log("Waiting over!!!!")
        
        collegeData.getAllStudents().then(students => {
            console.log(`Successfully retrieved ${students.length} students`)
        }).catch(err => {
                console.log(err)
            })
        
        collegeData.getCourses()
            .then(courses => {
                console.log(`Successfully retrieved ${courses.length} courses`)
            })
            .catch(err => {
                console.log(err)
            })

        collegeData.getTAs()
            .then(tas => {
                console.log(`Successfully retrieved ${tas.length} TAs`)
            })
            .catch(err => {
                console.log(err)
            })
    })
    .catch(err => {
        console.log(err)
    })
