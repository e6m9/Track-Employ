// import and require packages
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// set inquirer questions as array variables for each table
const homeQuestions = [
  'what would you like to do?'
];

const deptQuestions = [
  'please enter the name of the department...'
];

const roleQuestions = [
  'please enter the name of the role...',
  'please enter the salary of the role...',
  'please enter the department the new role belongs to...'
];

const emplQuestions = [
  'please enter the first name of the employee...',
  'please enter the last name of the employee...',
  'please enter the role of the employee...',
  'please enter the name of the manager for the employee...'
];

const empRoleUpdate = [
  'please select an employee to update...',
  'please select a new role for the employee...'
]

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

// app.get('/', async (req, res) => {
//   const answers = await inquirer.prompt(homeQuestions)

// set up startup view
app.get('/', (req, res) => {
  const answer = inquirer.prompt(homeQuestions) ([
    {
      type: 'list',
      message: homeQuestions[0],
      name: 'homeOptions',
      choices:
      [
        'view all departments',
        'view all roles',
        'view all employees',
        'add a department',
        'add a role',
        'add an employee',
        'update and employee role'
      ],
    }
  ])
  .then((answers) => {
    console.log(answer);

    
  })
});

// set up database view for departments
app.get('api/departments', (req, res) => {

});

// set up database view for roles
app.get('api/roles', (req, res) => {

});

// set up database view for employees
app.get('api/employees', (req, res) => {
  
});

// set up route for adding a department
app.post('api/add/department', (req, res) => {

});

// set up route for adding a role
app.post('api/add/role', (req, res) => {

});

// set up route for adding an employee
app.post('api/add/employee', (req, res) => {

});

// set up route for updating an emoployee rold
app.put('api/update/employeerole', (req, res) => {

});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});