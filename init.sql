CREATE TABLE students (
    id serial PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255)
);
CREATE TABLE grades (
    id serial PRIMARY KEY,
    points INTEGER,
    student_id INTEGER REFERENCES students(id)
);
INSERT INTO students (first_name, last_name) VALUES ('Light', 'Yagami');
INSERT INTO students (first_name, last_name) VALUES ('Yusuke', 'Urameshi');
INSERT INTO grades (points, student_id) VALUES (100, 1);
INSERT INTO grades (points, student_id) VALUES (99, 1);
INSERT INTO grades (points, student_id) VALUES (12, 2);
INSERT INTO grades (points, student_id) VALUES (0, 2);