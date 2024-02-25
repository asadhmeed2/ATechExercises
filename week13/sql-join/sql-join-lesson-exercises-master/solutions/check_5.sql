USE sql_intro;


SELECT * FROM teacher as t , student_teacher as st , student as s
WHERE s.s_name = 'Leo' 
AND t.t_id = st.teacher_id 
AND s.s_id = st.student_id
AND t.is_tenured IS TRUE