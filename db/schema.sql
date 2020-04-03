DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    id int not null AUTO_INCREMENT,
    name varchar(255) not null,
    devoured boolean not null default 0,
    primary key (id)
)