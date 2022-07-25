const getTasks = (req, res) => {
    res.render('index')
}

const addTasks = (req, res) => {
    res.render('add')
}

const editTasks = (req, res) => {
    res.render('edit')
}



module.exports = {getTasks, 
    addTasks, 
    editTasks}