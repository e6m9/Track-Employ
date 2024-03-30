// import and require packages
const mysql = require('mysql2');
const inquirer = require('inquirer');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'BlackMoon',
    database: 'employees_db'
  },
  console.log(`Connected to employees_db.`)
);

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("connected to MySql");
});

viewHome();

// set inquirer questions as array variables for each table
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
function viewHome() {
  inquirer.prompt([
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
          'update an employee role'
        ],
    }
  ])
    // handle the answers check user input against the options, then run a function based on user input
    .then(answer => {
      console.log(answer);
      switch (answer.homeOptions) {
        case 'view all departments':
          viewDepartments();
          break;
        case 'view all roles':
          viewRoles();
          break;
        case 'view all employees':
          viewEmployees();
          break;
        case 'add a department':
          addDepartment();
          break;
        case 'add a role':
          addRole();
          break;
        case 'add an employee':
          addEmployee();
          break;
        case 'update an employee role':
          updateEmployee();
          break;
      }
    })
};

// set up database view for departments
function viewDepartments() {
  const query = 'SELECT * FROM department';
  db.query(query, (err, results) => {
    if (err)
      throw err;

    console.log('\n');
    console.table(results);

    inquirer.prompt([
      {
        type: 'input',
        name: 'return',
        message: 'press Enter to return to the main menu...'
      }
    ]).then(() => {
      viewHome();
    })
  });
};

// set up database view for roles
function viewRoles() {
  const query = 'SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id'
  db.query(query, (err, results) => {
    if (err)
      throw err;

    console.log('\n');
    console.table(results);

    inquirer.prompt([
      {
        type: 'input',
        name: 'return',
        message: 'press Enter to return to the main menu...'
      }
    ]).then(() => {
      viewHome();
    })
  });
};

// set up database view for employees
function viewEmployees() {
  const query = "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS 'department', role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN employee manager ON employee.manager_id = manager.id LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;"
  db.query(query, (err, results) => {
    if (err)
      throw err;

    console.log('\n');
    console.table(results);

    inquirer.prompt([
      {
        type: 'input',
        name: 'return',
        message: 'press Enter to return to the main menu...'
      }
    ]).then(() => {
      viewHome();
    })
  });
};

// set up route for adding a department
function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'deptName',
      message: 'please enter the name of the new department...',
      validate:
        input =>
          input.length > 0 ? true :
            "please enter a name for the department..."
    }
  ]).then(answer => {
    const query = `INSERT INTO department (name)
    VALUES (?)`;
    db.query(query, [answer.deptName], (err, results) => {
      if (err)
        throw err;

      console.log(`${answer.deptName} added successfully.`);

      inquirer.prompt([
        {
          type: 'input',
          name: 'return',
          message: 'press Enter to return to the main menu...'
        }
      ]).then(() => {
        viewHome();
      });
    });
  });
};

// set up route for adding a role
function addRole() {
  db.query('SELECT id, name FROM department', (err, departments) => {
    if (err)
      throw err;

    const deptChoices = departments.map(dept => ({
      name: dept.name,
      value: dept.id,
    }));

    inquirer.prompt([
      {
        type: 'input',
        name: 'roleName',
        message: roleQuestions[0],
        validate:
          input =>
            input.length > 0 ? true :
              'please enter a title for the role...',
      },
      {
        type: 'input',
        name: 'roleSalary',
        message: roleQuestions[1],
        validate:
          input =>
            !isNaN(input) && input ? true :
              'please enter a salary for the role...',
      },
      {
        type: 'list',
        name: 'roleDept',
        message: roleQuestions[2],
        choices: deptChoices
      },
    ]).then(answer => {
      const query = `INSERT INTO role (title, salary, department_id)
    VALUES (?, ?, ?)`;
      db.query(query, [answer.roleName, answer.roleSalary, answer.roleDept], (err, results) => {
        if (err)
          throw err;

        console.log(`${answer.roleName} added successfully to ${answer.roleDept}.`);

        inquirer.prompt([
          {
            type: 'input',
            name: 'return',
            message: 'press Enter to return to the main menu...'
          }
        ]).then(() => {
          viewHome();
        });
      });
    });
  });
};

// set up route for adding an employee
function addEmployee() {
  db.query('SELECT id, title FROM role', (err, roles) => {
    if (err) throw err;

    const roleChoices = roles.map(role => ({
      name: role.title,
      value: role.id,
    }));

    db.query('SELECT id, CONCAT(first_name, " ", last_name) AS name FROM employee WHERE manager_id IS NULL', (err, managers) => {
      if (err) throw err;

      const managerChoices = managers.map(manager => ({
        name: manager.name,
        value: manager.id,
      })).concat([{ name: 'No Manager', value: null }]);

      inquirer.prompt([
        {
          type: 'input',
          name: 'firstName',
          message: emplQuestions[0],
          validate: input => input.length > 0 ? true : 'First name cannot be empty.',
        },
        {
          type: 'input',
          name: 'lastName',
          message: emplQuestions[1],
          validate: input => input.length > 0 ? true : 'Last name cannot be empty.',
        },
        {
          type: 'list',
          name: 'roleId',
          message: emplQuestions[2],
          choices: roleChoices,
        },
        {
          type: 'list',
          name: 'managerId',
          message: emplQuestions[3],
          choices: managerChoices,
        },
      ]).then(answers => {
        const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
        db.query(query, [answers.firstName, answers.lastName, answers.roleId, answers.managerId], (err, results) => {
          if (err) throw err;

          console.log('Employee added successfully.');

          inquirer.prompt([
            {
              type: 'input',
              name: 'return',
              message: 'press Enter to return to the main menu...'
            }
          ]).then(() => {
            viewHome();
          });
        });
      });
    });
  });
}

// set up route for updating an emoployee role
function updateEmployee() {
  db.query('SELECT id, CONCAT(first_name, " ", last_name) AS name FROM employee', (err, employees) => {
    if (err) throw err;

    const employeeChoices = employees.map(employee => ({
      name: employee.name,
      value: employee.id,
    }));

    inquirer.prompt([
      {
        type: 'list',
        name: 'employeeId',
        message: empRoleUpdate[0],
        choices: employeeChoices,
      }
    ]).then(employeeAnswer => {
      db.query('SELECT id, title FROM role', (err, roles) => {
        if (err) throw err;

        const roleChoices = roles.map(role => ({
          name: role.title,
          value: role.id,
        }));

        inquirer.prompt([
          {
            type: 'list',
            name: 'roleId',
            message: empRoleUpdate[1],
            choices: roleChoices,
          }
        ]).then(roleAnswer => {
          const updateQuery = 'UPDATE employee SET role_id = ? WHERE id = ?';
          db.query(updateQuery, [roleAnswer.roleId, employeeAnswer.employeeId], (err, results) => {
            if (err) throw err;

            console.log('Employee role updated successfully.');

            inquirer.prompt([
              {
                type: 'input',
                name: 'return',
                message: 'press Enter to return to the main menu...'
              }
            ]).then(() => {
              viewHome();
            });
          });
        });
      });
    });
  });
}