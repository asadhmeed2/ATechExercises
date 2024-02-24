USE sql_intro;

CREATE TABLE Dolphin(
    name VARCHAR(50) NOT NULL PRIMARY KEY,
    color VARCHAR(50),
    height TINYINT,
    healthy BIT DEFAULT(1)
);

INSERT INTO Dolphin(name,color,height) VALUES('Daron','blue',1.5);
INSERT INTO Dolphin(name,color,height) VALUES('Andy','gray',2);
INSERT INTO Dolphin(name,color,height) VALUES('Max','blue',1.5);
INSERT INTO Dolphin(name,color,height) VALUES('Shay','green',2.1);
INSERT INTO Dolphin(name,color,height) VALUES('Memo','blue',1.5);