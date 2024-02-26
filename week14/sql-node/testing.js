const Sequelize = require("sequelize");

const sequelize = new Sequelize("mysql://root:1234@localhost:3308/sql_intro"); //3308

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

// sequelize
//   .query("INSERT INTO company VALUES(null, 'Google', 'Tech', 10000)")
//   .then(function ([result]) {
//     console.log(result);
//   });

// sequelize.query("SELECT * FROM company").then(function ([results, metadata]) {
//   console.log(results);
// });

const addStudent = async (name, is_brilliant) => {
  const query = `INSERT INTO student VALUES(${null},'${name}',${is_brilliant})`;

  const res = await sequelize.query(query);

  return res[0];
};

const addTeacher = async (name, is_tenured) => {
  const query = `INSERT INTO teacher VALUES(${null},'${name}',${is_tenured})`;

  const res = await sequelize.query(query);

  return res[0];
};

// addStudent("hmeed", 1);
// addTeacher("Yoda", 0);

// sequelize.query("SELECT * FROM teacher").then(function ([results, metadata]) {
//   console.log(results);
// });

sequelize
  .query("SELECT * FROM student_teacher")
  .then(function ([results, metadata]) {
    console.log(results);
  });

const enrollStudent = async (student, teacher) => {
  const getIdsQuery = `SELECT s_id,t_id FROM student as s,teacher as t 
    WHERE s.s_name = '${student}' AND t.t_name = '${teacher}'`;

  const idsRes = await sequelize.query(getIdsQuery);

  if (!(idsRes[0][0].s_id && idsRes[0][0].t_id)) {
    return;
  }

  const enrollQuery = `INSERT IF NOT EXISTS INTO student_teacher VALUES(${idsRes[0][0].s_id},${idsRes[0][0].t_id})`;

  const results = await sequelize.query(enrollQuery);

  return results;
};

// enrollStudent("Ryan", "Levine");
// enrollStudent("asaad", "Foster").then((data) => {
//   console.log(data);
// });
