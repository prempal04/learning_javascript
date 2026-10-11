-- Create databases
CREATE DATABASE IF NOT EXISTS instagram;

-- Select the database
USE instagram;

-- Create the user table
CREATE TABLE user (
    id INT,
    age INT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE,
    followers INT DEFAULT 0,
    following INT,
    CONSTRAINT CHECK (age >= 13),
    PRIMARY KEY (id)
);

-- Create the post table
CREATE TABLE post (
    id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

-- Insert data into table

INSERT INTO user
(id, age, name, email, followers, following)
VALUES
(1, 14, 'adam', 'adam@yahoo.in', 123, 145),
(2, 16, 'bob', 'bob@gmail.com', 250, 180),
(3, 19, 'charlie', 'charlie@gmail.com', 500, 320),
(4, 21, 'david', 'david@yahoo.com', 890, 450),
(5, 17, 'emma', 'emma@gmail.com', 340, 290),
(6, 25, 'olivia', 'olivia@yahoo.com', 1200, 600),
(7, 15, 'liam', 'liam@gmail.com', 75, 110),
(8, 18, 'sophia', 'sophia@yahoo.com', 670, 520),
(9, 22, 'noah', 'noah@gmail.com', 950, 410),
(10, 20, 'ava', 'ava@yahoo.com', 430, 350);


-- To show table data (selected)
SELECT id, name, email FROM user;

-- to show all table data 
SELECT * FROM user;

-- to show unique data from the column
SELECT DISTINCT age FROM user;


-- Defining some conditions using where clause

select name, followers from user
where followers < 200;

-- operators

select * from user
where age not in (14, 16);
where email in ("sophia@yahoo.com", "charlie@gmail.com");
where age between 15 and 17;
where age > 15 and followers > 200;

-- Limiting the response (upper limit or number of rows to be returned)

select * from user 
where age > 15
limit 2;

-- To sort in ascending or descending order 

select * from user 
where age > 15
order by age asc;

-- Aggregate functions 

select max(followers) from user;
select count(age) from user 
where age > 14;

select min(age) from user;
select avg(age) from user;
select sum(followers) from user;

-- Group By Clause

select age, max(followers) from user
group by age;

-- Having clause
select age, max(followers) from user
group by age
having max(followers) > 200;

-- Update exisiting table data

update user
set followers = 600 
where age = 16;

select * from user;

SET SQL_SAFE_UPDATES = 0;

-- Delete data from table

delete from user
where age = 14;

-- Alter data in table

alter table user
modify followers int default 5;
change column followers subscribers int default 0;
rename to insta_user;
drop column city;
add column city varchar(25) default "Delhi";

-- clear all table data

truncate table user;



