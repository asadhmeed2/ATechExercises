USE sql_intro;

SELECT  id,survival_rate FROM patient as pa,disease as di
WHERE pa.disease is not null AND pa.disease = di.name 
ORDER BY di.survival_rate DESC;