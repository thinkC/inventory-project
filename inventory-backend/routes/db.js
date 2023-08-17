const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'Slb01234*',
  database: 'inventory',
  connectionLimit: 10, // Adjust as needed
});


pool.execute('SELECT 1', (err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Database connection established successfully!');
  });

module.exports = pool.promise();






// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'P@ssw0rd',
//   database: 'inventory'
  
// });

// connection.connect((err) => {
//   if (err) {
//    console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Database connection established successfully!');
// });

// module.exports = connection;


// const sql = require('mssql');

// const config = {
//   server: 'localhost',
//   database: 'inventory',
//   options: {
//     encrypt: false, // Set to true if using encrypted connection
//     trustedConnection: true, // Use Windows Authentication
//   },
// }

// const pool = new sql.ConnectionPool(config);
// const poolConnect = pool.connect();

// poolConnect
//   .then(() => {
//     console.log('Connected to the database');
//   })
//   .catch((err) => {
//     console.error('Error connecting to the database:', err);
//   });

// module.exports = pool;
