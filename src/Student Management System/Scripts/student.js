// 1. Javascript Variable to hold srudents

let students = []; //student array
let studentId = 1; //counter
//2. Person class

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

//3. Student
// Inherit Person class
class Student extends Person{
    constructor(name, age, marks){
        super(name,age); //Calling constructor of person class
        this.marks = marks;
        this.Id = studentId++;
    }
//Calculate Grade
    calculateGrade(){
        let avg = this.marks.reduce((sum,val) => sum + val, 0)/ this.marks.length;
        return avg >= 75 ? "A" : avg >=60? "B" : "C";
    
    }
}

//4. Mixin

const HobbyMixin ={
    setHobby(hobby){
        this.hobby = hobby;
    },
    getHobby(){
        return this.hobby || "NA";
    }

}

Object.assign(Student.prototype, HobbyMixin);

//5. Add Student

function addStudent(){

    let name = prompt("Enter Student Name:");
    let age = prompt("Enter student age:");

    if(!name || !age){
        alert("Invalid Input!");
        return;        
    }

    let marksInput = prompt("Enter Marks separated by commas e.g. 50,45,80: ");

    let marks = marksInput.split(",").map( m=> Number(m.trim()));

    let confirmSave= confirm(`Do you want to save student ${name}?`);

    if(!confirmSave)
    {
        alert("Student not saved");
        return;
    }

    let student = new Student(name,age,marks);

    let hobby = prompt("Enter student's hobby (Optional):");

    if(hobby) { student.setHobby(hobby);}

    students.push(student);

    alert(`Student ${name} added successfully!`);

}

//6. Display Students

function showStudents(){

    if(students.length === 0)
    {
        alert("No students found!");
        return;
    }

    let output ="<h3> Student Records</h3> <ul>";

    students.forEach(s=> {output += `<li> 
        <b> ID:</b> ${s.Id},
        <b> Name:</b> ${s.name},
        <b> Age:</b> ${s.age},
        <b> Grade:</b> ${s.calculateGrade()},
        <b> Hobby:</b> ${s.hobby}
        </li>`; });

        output += "</ul>";

        document.getElementById("output").innerHTML = output;

}