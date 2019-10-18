DROP DATABASE IF EXISTS crypto_db;
CREATE DATABASE crypto_db;

USE crypto_db;

CREATE TABLE price (
    id int AUTO_INCREMENT NOT NULL,
  coin_pair varchar(255) NOT NULL,    
    PRIMARY KEY (id)
);

