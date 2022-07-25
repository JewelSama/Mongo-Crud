const express = require('express')
const TaskRouter = require('./routes/tasks.routes')
const dotenv = require('dotenv')
const methodOverride = require('method-override')
const ejs = require('ejs')
const connectDB = require('./config/db')

dotenv.config();
connectDB()
const app = express()

app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')


app.use(methodOverride('_method'))

app.use('/tasks', TaskRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))