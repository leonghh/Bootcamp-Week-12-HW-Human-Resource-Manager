var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "10A21e1994",
    database: "employeesDB"
  });

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  runApp();
});

const choiceQ = {
  type: 'list',
  message: 'What would you like to do?',
  name: 'userChoice',
  choices: [
    'View All Employees',
    'View Employees by Department',
    'View Employees by Manager',
    'Add Employee',
    'Remove Employee',
    'Update Employee Role',
    'Update Employee Manager',
    'View All Roles',
    'Add Role',
    'Remove Role',
    'Add Department',
    'Remove Department',
    'Check Budget',
    'Exit'
  ]
}

function runApp() {
  inquirer.prompt(choiceQ) 
    .then((data ) => {
      if (data.userChoice === 'View All Employees') {
        queryAllEmployees();
      }
      else if (data.userChoice === 'View Employees by Department') {
        queryByDepartment();
      }
      else if (data.userChoice === 'View Employees by Manager') {
        queryByManager();
      }
      else if (data.userChoice === 'Add Employee') {
        addEmployee();
      }
      else if (data.userChoice === 'Remove Employee') {
        removeEmployee();
      }
      else if (data.userChoice === 'Update Employee Role') {
        updateEmployeeRole();
      }
      else if (data.userChoice === 'Update Employee Manager') {
        updateEmployeeManager();
      }
      else if (data.userChoice === 'View All Roles') {
        queryAllRoles();
      }
      else if (data.userChoice === 'Add Role') {
        addRole();
      }
      else if (data.userChoice === 'Remove Role') {
        removeRole();
      }
      else if (data.userChoice === 'Add Department') {
        addDepartment();
      }
      else if (data.userChoice === 'Remove Department') {
        removeDepartment();
      }
      else if (data.userChoice === 'Check Budget') {
        checkBudet();
      }
      else if (data.userChoice === 'Exit') {
        console.log("Finished using Employee Tracker");
        connection.end();
      }
  });
};

function queryAllEmployees() {
  let query = 'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, manager_id ';
    query += 'FROM department, employee, role WHERE employee.role_id = role.id AND role.department_id = department.id ';
    query += 'ORDER BY employee.id';
    connection.query(query, function (err, res) {
        if (err) throw err;
        const resArray = [];
        console.log(res);
        for (var i = 0; i < res.length; i++) {
          const row = {
              'id': res[i].id,
              'first_name': res[i].first_name,
              'last_name': res[i].last_name,
              'title': res[i].title,
              'department': res[i].name,
              'salary': res[i].salary,
              'manager': res[i].manager_id
          };
          resArray.push(row);
      }
      console.table(resArray);
      console.log("-----------------------------------");
      runApp();
  });
};

// function queryByDepartment();

// function queryByManager();

// function addEmployee();

// function removeEmployee();

// function updateEmployeeRole();

// function updateEmployeeManager();

// function queryAllRoles();

// function addRole();

// function removeRole();

// function addDepartment();

// function removeDepartment();

// function checkBudet();