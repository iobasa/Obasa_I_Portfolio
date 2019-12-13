const config = require("../config");
const mysql = require('mysql');

var connect = mysql.createPool({
    host: config.host,
    //port: config.port, //comment out when ready to push up to heroku
    user: config.uname,
    password: config.pword,
    database: config.dbase,
    connectionLimit : 20,
    queueLimit : 100,
    waitForConnections : true
  });

// const connect = sql.createConnection({
//     host: config.host,
//     port: config.port,
//     user: config.uname,
//     password: config.pword,
//     database: config.dbase
// })

module.exports = connect;