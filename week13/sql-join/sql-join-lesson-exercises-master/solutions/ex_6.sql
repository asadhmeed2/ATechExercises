USE sql_intro;


SELECT eth.name as name, COUNT(p.ethnicity) FROM patient as p,ethnicity as eth
WHERE p.disease LIKE 'lettuce%' AND eth.id = p.ethnicity GROUP BY p.ethnicity