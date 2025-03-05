const express = require('express')
const { run } = require('./lib/db')
const UserRoute = require('./routers/UserRoutes')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express()

let Port = 4000
app.use(bodyParser.json())
app.use(cookieParser())
app.use('/v1/api',UserRoute )

run()

app.listen(Port,()=> {
    console.log(`server is running on ${Port}`)
})