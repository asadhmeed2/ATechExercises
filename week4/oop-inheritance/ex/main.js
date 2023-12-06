class Person{
    constructor(name,startYear){
        this.name = name;
        this.startYear = startYear;
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }

}

class Teacher extends Person{
    constructor(name,hiredYear,sallary){
        super(name,hiredYear);
        this.sallary = sallary;
    }
}

class Student extends Person{
    constructor(name,recruitedYear){
        super(name,recruitedYear);
    }


}

class Principal extends Person{

    teachers = [];
    students = [];

    constructor(name,hiredYear){
        super(name,hiredYear);
    }

    hireTeacher(teacher){
        this.teachers.push(teacher);// new Teacher

        console.log(`${this.name} just hired ${teacher.name}`);
    }

    recruitStudent (student){
        this.students.push(student);
    }


    expelStudent (student){
        this.students.splice(this.students.findIndex(std=> std.name === student.name),1);
    }

    transferStudent (student,principal){
        const stdIdx = this.students.findIndex(std=> std.name === student.name)
        if(stdIdx >= 0){
            this.students.splice(stdIdx,1);
            principal.recruitStudent(student);
        }
    }
}

const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)

const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)

//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron

