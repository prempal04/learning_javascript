create database if not exists college;

use college;

create table teacher (
	id int primary key,
    name varchar(50),
    subject varchar(50),
    salary int
);

insert into teacher
(id, name, subject, salary)
values
(23, "ajay", "math", 50000), 
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

select * from teacher;


-- select teachers whose salary is more than 55k

select name from teacher 
where salary > 55000;


-- rename the salary column of teacher table to ctc

alter table teacher
change salary ctc int ;

-- update salary of all teachers by giving them an increment of 25%;

update teacher
set ctc = ctc + ctc * 0.25;

-- add a new column for teachers called city. The default city should be "Gurgaon"

alter table teacher
add column city varchar(50) default "Gurgaon";

-- delete the salary column for teacher table 

alter table teacher
drop column ctc;



create table if not exists student(
	rollno int primary key,
    name varchar(30),
    city varchar(30),
    marks int
);

insert into student
(rollno, name, city, marks)
values
(110, "adam", "delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);

select * from student;

-- select all students who scored 75+

select * from student
where marks > 75;

-- find names of all cities where students are from 

select distinct city from student;

select city from student group by city;

-- find the max marks of students from each city

select city, max(marks) from student
group by city;

-- find the average of class

select avg(marks) from student;

-- add a new column grade, assign grade such that: marks > 80 (O), marks 70-80 (A), marks 60-70 (B)

alter table student
add column grade varchar(2);

update student
set grade = "O" 
where marks >=80;


update student
set grade = "A" 
where marks between 70 and 80;

update student
set grade = "B" 
where marks between 60 and 70;