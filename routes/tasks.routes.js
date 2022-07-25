const Task = require('../models/taskModel')


const express = require('express')
const {getTasks, addTasks, editTasks, deleteTask, addNewTask, updateTask} = require('../controllers/taskController')

const router = express.Router()

router.route('/')
.get(getTasks)
.post(addNewTask)

router.route('/add').get(addTasks)

router.delete('/delete/:id', deleteTask)

router.route('/edit/:id')
.get(editTasks)
.put(updateTask)


  


module.exports = router;