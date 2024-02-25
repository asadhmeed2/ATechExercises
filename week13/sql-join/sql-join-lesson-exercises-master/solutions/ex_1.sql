USE sql_intro;


CREATE TABLE IF NOT EXISTS ethnicity(
    id INT NOT NULL  PRIMARY KEY,
    name VARCHAR(20) 
);

CREATE TABLE IF NOT EXISTS gender(
    id INT NOT NULL  PRIMARY KEY,
    name VARCHAR(20) 
);

CREATE TABLE IF NOT EXISTS symptoms(
    family INT NOT NULL PRIMARY KEY,
    fever BOOLEAN ,
    blue_whelts BOOLEAN ,
    low_bp BOOLEAN 
);

CREATE TABLE IF NOT EXISTS disease(
    name VARCHAR(20) NOT NULL PRIMARY KEY,
    survival_rate FLOAT 
);

CREATE TABLE IF NOT EXISTS patient(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ethnicity INT, 
    gender INT, 
    symptoms_family INT, 
    disease VARCHAR(20),

    FOREIGN KEY (ethnicity) REFERENCES ethnicity(id),
    FOREIGN KEY (gender) REFERENCES gender(id),
    FOREIGN KEY (symptoms_family) REFERENCES symptoms(family),
    FOREIGN KEY (disease) REFERENCES disease(name)
);


-- DROP TABLE IF EXISTS  patient;
-- DROP TABLE IF EXISTS  ethnicity,gender, symptoms,disease;

