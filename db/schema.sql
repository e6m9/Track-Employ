DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);


CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL,
  department_id INT
  FOREIGN KEY (department_id)
  REFERENCES departments(id)
);

CREATE TABLE employee (
id INT PRIMARY KEY NOT NULL,
first name VARCHAR(30),
last name VARCHAR(30),
role_id 'INT',
manager_id INT,
)