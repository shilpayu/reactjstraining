class Student {

    constructor(rollno, fname, lastname){
        this.rollno = rollno;
        this.fname = fname;
        this.lastname = lastname;
        console.log("i am inside constructor");
    }
}

var s1 = new Student(80, "Kavita", "Gupta");
var s2 = new Student(81, 'Tarun', 'Gupta');
console.log(s1);
console.log(s1.fname);
console.log(s2.fname);