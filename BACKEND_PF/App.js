
const express = require("express");
const cors = require("cors");
const db = require('./database/db')
const cookieParser = require('cookie-parser');
const UserModel = require('./model/usuario')


const controllers = require('./controllers')

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser());


app.get('/user/:userId', controllers.getUserById)
app.post('/register', controllers.register)
app.post('/login', controllers.login)




const PORT= 4000;

app.listen(PORT, () =>{
    console.log(`Serve Funcionando en el Puerto, ${PORT}`);
    db();
});

module.exports = app


