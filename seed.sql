USE employees_db;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Anthony", "Crusack", 1, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Lexie", "Grey", 2, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Samantha", "Ling", 3, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Arizona", "Robbins", 3, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("David", "Ling", 4, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Alex", "Karev", 4, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jackson", "Avery", 5, 5);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Miranda", "Bailey", 6, 8);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Rita", "Pang", 7, 9);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("April", "Kepner", 7, 9);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Niki", "Ling", 8, 12);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Cristina", "Yang", 8, 12);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Derek", "Shepherd", 9, 12);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Mark", "Sloan", 10, 14);









INSERT INTO roles (title, salary, department_id)
VALUE ("Salesperson", 15000, 1);

INSERT INTO roles (title, salary, department_id)
VALUE ("Trader", 22000, 1);

INSERT INTO roles (title, salary, department_id)
VALUE ("Business Manager", 10000, 1);

INSERT INTO roles (title, salary, department_id)
VALUE ("Technology Lead", 20000, 2);

INSERT INTO roles (title, salary, department_id)
VALUE ("Software Engineer", 17000, 2);

INSERT INTO roles (title, salary, department_id)
VALUE ("Accountant", 10000, 3);

INSERT INTO roles (title, salary, department_id)
VALUE ("Operations Specialist", 12000, 4);

INSERT INTO roles (title, salary, department_id)
VALUE ("Lawyer", 24000, 5);

INSERT INTO roles (title, salary, department_id)
VALUE ("Compliance Officer", 12000, 5);

INSERT INTO roles (title, salary, department_id)
VALUE ("Internal Audit Officer", 14000, 6);


INSERT INTO departments (department_name)
VALUE ("Front Office");

INSERT INTO departments (department_name)
VALUE ("Technology");

INSERT INTO departments (department_name)
VALUE ("Financial Controllers");

INSERT INTO departments (department_name)
VALUE ("Operations");

INSERT INTO departments (department_name)
VALUE ("Legal and Compliance");

INSERT INTO departments (department_name)
VALUE ("Internal Audit");