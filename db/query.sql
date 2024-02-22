
SELECT departments.id AS department, roles.id
FROM roles
LEFT JOIN departments
ON roles.department_id = movies.id
ORDER BY movies.movie_name;
