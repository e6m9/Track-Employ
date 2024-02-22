USE employee_db;

INSTERT INTO departments (id, name)
VALUES 
        (1, "homegoods"),
        (2, "women's"),
        (3, "men's"),
        (4, "children"),
        (5, "shoes"),
        (6, "front end"),
        (7, "stock room"),
        (8, "management");

INSERT INTO roles (id, title, salary, department_id)
VALUES
        (1, "manager", 30.00, 8);
        (2, "assistant manager", 25.00, 8),
        (3, "coordinator", 17.25, ),
        (4, "team member", 16.25, ),
        

INSERT INTO employees (id, first name, last name, role_id, manager_id)
VALUES
        (1, "Melanie", "Flowers", 1, )
        (2, "Shelaine", "Wilkens", 2, 1)
        (3, "Lilibeth", "Hernandez", 2, 1)
        (4, "Ashley, Maximillian", 3, 2),
        (5, "Davin", "McCray", 4, 2,
        (6, "Aniyah", "McKay", 4, 3),
        (7, "Gabby", "Benson", 4, 3),
