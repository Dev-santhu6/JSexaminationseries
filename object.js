//1
let x={}
console.log(x);

//2
let person ={
    name:"B.Santhujan",
    age : 21,
    gender:"male",
}
console.log("Hello,my name is "+person.name);
console.log(person);

//3
function greet(greetstudent) {
    return "Hello "+person.name+" welcome to the codig school" 
}
console.log(greet("greetstudent"));
//4
console.log("Name:", person.name);
console.log("Name:", person["name"]);
//5
person.email="john@example.com";
console.log(person.email);

//6
delete person.gender;
console.log(person);

//7

//8
let student={
    name:"B.Santhujan"

}
let courses ={
    course:"Web Development"
}
let studentcourse = Object.assign({}, student, courses);
console.log(studentcourse);
//9
