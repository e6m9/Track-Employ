USE employees;

INSERT INTO department (id, name)
VALUES
        (1, "player"),
        (2, "npc"),
        (3, "outside variable");

INSERT INTO role (id, title, salary, department_id)
VALUES
        (1, "dungeon master", 30.00, 3),
        (2, "paladin", 30.00, 1),
        (3, "healer", 20.00, 1),
        (4, "mage", 40, 1),
        (5, "shop keeper", 00.00, 2),
        (6, "parent", 100000, 3),
        (7, "other", 00.00, 3);
        

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
        (1, "Tim", "Savery", 1, 3),
        (2, "Grown", "Flowers", 3, 1),
        (3, "Lilly", "Hernandez", 6, NULL),
        (4, "Dark", "Powr", 4, 1),
        (5, "Lyric", "Melody", 2, 1),
        (6, "Septic", "Tank", 7, NULL),
        (7, "Selibate", "Do'ork", 5, 1),
        (8, "Walter", "White", 4, 1),
        (9, "Ayer", "Heds", 3, 1);
