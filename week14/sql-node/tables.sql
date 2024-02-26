
-- DROP TABLE IF EXISTS pokemon_trainer;

-- DROP TABLE IF EXISTS pokemon;
-- DROP TABLE IF EXISTS trainer;
-- DROP TABLE IF EXISTS town;

-- DROP TABLE IF EXISTS pokemon_type;



CREATE TABLE IF NOT EXISTS pokemon_type(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(50) NOT NULL 
);



CREATE TABLE IF NOT EXISTS pokemon(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    p_name VARCHAR(50),
    type INT NOT NULL,
    height FLOAT,
    weight INT,
    FOREIGN KEY (type) REFERENCES pokemon_type(id)
);


CREATE TABLE IF NOT EXISTS town(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tw_name VARCHAR(50) NOT NULL 
);

CREATE TABLE IF NOT EXISTS trainer(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    t_name VARCHAR(50) NOT NULL,
    town INT ,
    FOREIGN KEY (town) REFERENCES town(id)
);




CREATE TABLE IF NOT EXISTS pokemon_trainer(
    p_id INT NOT NULL,
    t_id INT NOT NULL ,
    FOREIGN KEY (p_id) REFERENCES pokemon(id),
    FOREIGN KEY (t_id) REFERENCES trainer(id)
);

