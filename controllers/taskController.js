const Task = require('../models/taskModel')

const getTasks = async(req, res) => {
    const tasks = await Task.find().sort({
        createdAt: 'desc'
    })
    res.render('index', {tasks: tasks})
}

const addTasks = (req, res) => {
    let task = ""
    res.render('add', {task: task})
}

const editTasks = async(req, res) => {
    const task = await Task.findById(req.params.id)
    res.render('edit', {task: task})
}
const updateTask = async(req, res, next) => {
    
    req.task = await Task.findById(req.params.id)
        let task = req.task
        task.title = req.body.title,
        task.description = req.body.description
    
    try {
        task = await task.save()
        res.redirect('/tasks')
    } catch (error) {
        console.log(error)
    }
}

const addNewTask = async(req, res) => {
    let task = new Task({
        title: req.body.title,
        description: req.body.description
    })
    try {
        await task.save()
        res.redirect('/tasks')
    } catch (error) {
        console.log(error)
    }
}


const deleteTask = async(req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.redirect('/tasks')
    } catch (error) {
        res.send(error)
    }
    
}


module.exports = {getTasks, 
    addTasks, 
    editTasks,
    addNewTask,
    updateTask,
    deleteTask,
}