// var student = {
//     rollno : 12,
//     name : 'Anubhav',
//     doa : '01/02/2020'
// }

// console.log(student);
// var rollno1 = student.rollno;
// var name1 = student.name;
// var doa1 = student.doa;

// //es6 feature
// // var {rollno, name, doa} = student;
// // console.log("rollno", rollno);
// // console.log("name", name);
// // console.log("doa", doa);

// var {rollno : rn, name, doa :date_of_admission} =  student;
// console.log(date_of_admission);

var student1 = {
    rollno : 12,
    doa : '01/02/2020',
    name : {
        firstname:"kavita", 
        lastname : "gupta"
    }
}
console.log(student1);

var {
    rollno, 
    doa, 
    name : {firstname, lastname},
} = student1;

console.log(rollno);
console.log(`${firstname}`);