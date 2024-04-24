const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'prasad',
  port: 3306,
  database: 'airbnb_db',
  connectionLimit: 10,
})

module.exports = {
  pool,
}
