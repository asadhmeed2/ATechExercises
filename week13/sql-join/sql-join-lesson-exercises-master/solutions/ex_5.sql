USE sql_intro;


SELECT symptoms_family, Count(p.symptoms_family) FROM patient as p , symptoms as stm 
WHERE  p.symptoms_family = stm.family
GROUP BY stm.family;
