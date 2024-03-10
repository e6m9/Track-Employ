USE employees_db;

INSERT INTO department (name)
VALUES
        ("player"),
        ("npc"),
        ("outside variable");

INSERT INTO role (title, salary, department_id)
VALUES
        ("dungeon master", 30, 3),
        ("paladin", 30, 1),
        ("healer", 20, 1),
        ("mage", 40, 1),
        ("shop keeper", 0, 2),
        ("other", 0, 3);
        

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
        ("Tim", "Savery", 1, NULL),
        ("Grown", "Flowers", 3, 1),
        ("Dark", "Powr", 4, 1),
        ("Lyric", "Melody", 2, 1),
        ("Septic", "Tank", 6, NULL),
        ("Selibate", "Do'ork", 5, 1),
        ("Walter", "White", 4, 1),
        ("Ayer", "Heds", 3, 1);
