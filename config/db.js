const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  ssl: {
    rejectUnauthorized: true
  }
});

async function testConnection() {
  try {
    const connection = await db.getConnection();
    console.log('Connected to the database');
    connection.release();
  } catch (err) {
    console.error('Error connecting to the database: ', err.stack);
  }
}

testConnection();

module.exports = db;