USE sql_intro;

SELECT s_name FROM  student as st , student_teacher as s_t ,teacher as te
WHERE st.s_id = s_t.student_id AND s_t.teacher_id = te.t_id AND t_name = 'Foster';