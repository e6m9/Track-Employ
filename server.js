// import and require packages
const mysql = require('mysql2');
const inquirer = require('inquirer');
const fs = require('fs');

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

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("connected to MySql");
});


// set inquirer questions as array variables for each table
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

// set up startup view
app.get('/', (req, res) => {
  const answer = inquirer.prompt(homeQuestions) ([
    {
      type: 'list',
      message: 'what would you like to do?',
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
function viewDepartments() {
};

// set up database view for roles
function viewRoles() {
};

// set up database view for employees
function viewEmployees() {
};

// set up route for adding a department
function addDepartment() {
};

// set up route for adding a role
function addRole() {
};

// set up route for adding an employee
function addEmployee() {
};

// set up route for updating an emoployee rold
function updateEmployee() {
};