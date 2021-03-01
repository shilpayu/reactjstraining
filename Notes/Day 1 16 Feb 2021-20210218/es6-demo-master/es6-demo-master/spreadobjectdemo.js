var studentObject = {rn : 10, name : 'Sachin'};
var copiedObject = Object.assign({},studentObject);

var spreadObject = {...studentObject};
// console.log(copiedObject);
// console.log(spreadObject);
//assigning new values
var spreadObject1 = {...studentObject, marks: 70,age : 19 };
//{rn : 10, name : 'Sachin',marks: 70,age : 19 };
console.log(studentObject);
console.log(spreadObject1);