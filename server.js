// import and require packages
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'BlackMoon',
    database: 'employees_db'
  },
  console.log(`Connected to the employee_db database.`)
);

// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("connected to MySql");
// });

app.get('api/employees',)

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});