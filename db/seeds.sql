USE employee_db;

INSTERT INTO department (id, name)
VALUES 
        (1, "homegoods"),
        (2, "women's"),
        (3, "men's"),
        (4, "children"),
        (5, "shoes"),
        (6, "front end"),
        (7, "stock room"),
        (8, "management");

INSERT INTO role (id, title, salary, department_id)
VALUES
        (4, "team member", 16.25, ),
        (3, "coordinator", 17.25, ),
        (2, "assistant manager", 25.00, 8),
        (1, "manager", 30.00, 8);

INSERT INTO employee (id, first name, last name, role_id, manager_id)
VALUES
        (100, "Shelaine", "Wilkens", 2, )
        (69, "Ashley, Maximillian", 3, 100),
        (43, "Davin", "McCray", 3)