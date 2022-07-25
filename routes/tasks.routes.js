const express = require('express')
const {getTasks, addTasks, editTasks} = require('../controllers/taskController')

const router = express.Router()

router.route('/').get(getTasks)
router.route('/add').get(addTasks)
router.route('/edit').get(editTasks)

module.exports = router;