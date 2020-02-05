CREATE TABLE student (
student_id INT key,
first_name VARCHAR(20),
last_name VARCHAR(20),
major VARCHAR(20),
birthday DATE
);

CREATE TABLE course (
course_id VARCHAR(20) key,
c_description VARCHAR(50)
);

CREATE TABLE grades (
student_id INT key,
course_id VARCHAR(20) key,
term VARCHAR(20) key,
grade VARCHAR(1)
);

INSERT INTO student
( student_id, first_name, last_name, major, birthday )
VALUES
( 1, 'John', 'Doe', 'CS', '1999-01-01' ),
( 2, 'Jane', 'Doe', 'SE', '2000-02-05' );

INSERT INTO course
( course_id, c_description )
VALUES
( 'CS260', 'Datastructures' ),
( 'CS275', 'Web and Mobile Ap Developement' );

INSERT INTO grades
( student_id, course_id, term, grade )
VALUES
( 1, 'CS260', 'WIN2017', 'D' ),
( 1, 'CS275', 'WIN2017', 'A' ),
( 2, 'CS260', 'WIN2017', 'B' ),
( 2, 'CS275', 'WIN2017', 'C' );