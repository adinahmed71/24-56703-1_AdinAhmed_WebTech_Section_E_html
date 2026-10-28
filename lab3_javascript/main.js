// 1. Asking user for student details using appropriate data types and input methods
let name = prompt("Enter student's name:");
let age = parseInt(prompt("Enter student's age:"));
let cgpa = parseFloat(prompt("Enter student's CGPA:"));
let isStudent = (prompt("Are you a student? (true/false)") === "true");
let grade = prompt("Enter student's grade (A/B/C/F):").charAt(0);

// Displaying the entered information
console.log("--- Student Information ---");
console.log("Name: " + name);
console.log("Age: " + age);
console.log("CGPA: " + cgpa);
console.log("Student: " + isStudent);
console.log("Grade: " + grade);


// 2. Storing three course names in an array and displaying them using a loop
let courses = [
    "Web Technology",
    "OOP",
    "Database"
];

console.log("--- Courses ---");
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}


// 3. Asking for marks and determining the grade based on conditions
let marks = parseInt(prompt("Enter student's marks:"));

if (marks >= 80) {
    console.log("Grade from Marks: A+");
}
else if (marks >= 70) {
    console.log("Grade from Marks: A");
}
else if (marks >= 60) {
    console.log("Grade from Marks: B");
}
else {
    console.log("Grade from Marks: F");
}


// 4. Function named showStudent() receiving name and age as parameters
function showStudent(name, age) {
    console.log("--- Using showStudent Function ---");
    console.log("Student Name: " + name);
    console.log("Student Age: " + age);
}

showStudent(name, age);
let students = [];

console.log("Enter names for 3 students:");
for (let i = 0; i < 3; i++) {
    students[i] = prompt("Enter student name " + (i + 1) + ":");
}

console.log("--- Students List ---");
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
