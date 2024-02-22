DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE departments (
  id INT PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(30) NOT NULL
  ON DELETE SET NULL
);


CREATE TABLE roles (
  id INT PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
  ON DELETE SET NULL
);

CREATE TABLE employees (
id INT PRIMARY KEY AUTOINCREMENT NOT NULL,
first name VARCHAR(30),
last name VARCHAR(30),
role_id INT NOT NULL,
manager_id INT,
FOREIGN KEY (employee_role_id)
REFERENCES roles(id)
FOREIGN KEY (manager_id)
REFERENCES employees(id)
ON DELETE SET NULL
);