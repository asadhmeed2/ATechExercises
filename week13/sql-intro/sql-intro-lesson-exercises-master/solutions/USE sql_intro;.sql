USE sql_intro;

-- CREATE TABLE test_table(
--     test_id INT NOT NULL AUTO_INCREMENT,
--     test_field VARCHAR(20),
--     test_field_2 INT,
--     PRIMARY KEY (test_id)
-- );

-- INSERT INTO test_table VALUES(null, "Bowling", 12);
-- SELECT * FROM test_table;

-- INSERT INTO test_table VALUES(null, "asad",33)

-- CREATE database sql_intro;

-- CREATE TABLE Deity(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(50),
--     mythology VARCHAR(20),
--     main_power VARCHAR(50),
--     coolness INT,
--     creation_date INT
-- )


-- INSERT INTO Deity(name, coolness)
-- VALUES("Zeus", 11)


-- UPDATE Dolphin 
-- SET height = 3 
-- WHERE name = 'shay';

-- INSERT INTO Dolphin(name,color,height) VALUES('Daron','blue',3);

SELECT * FROM Dolphin;

-- INSERT INTO Deity 
-- VALUES(null, "Zeus", "Greek", "Thunder", 11, "-1400")

-- SELECT name, main_power
-- FROM Deity
-- WHERE name LIKE 'hep%';