
const express = require('express');
const bodyParser = require('body-parser');
const port = 3050;
const app = express();
const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movies_db'
});

//check connection
connection.connect(error => {
    if (error) throw error;
    console.log("Connection succesful!");
});

module.exports = {
    connection
}


// middlewares
 app.use(express.json());
// routes
app.use(require('./routes/index'));

// listen server
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})

