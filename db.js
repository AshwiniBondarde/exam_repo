 const mysql = require('mysql')


 const pool = mysql.createPool({
   host: 'localhost',
   user: 'root',
   password: 'root',
   database: 'punedac',
   waitForConnections: true,
   connectionLimit: 10,
   maxIdle: 10,
   idleTimeout: 60000,
   queueLimit: 0,
   enableKeepAlive: true,
   keepAliveInitialDelay: 0,
 })

 module.exports = pool
