// var arr1 = ["this", "is","my"];
// var arr2 = ["first", "example"];

// // var arr3 = arr1.concat(arr2);
// // console.log(arr3);
// // console.log(arr1);
// //es6
// var mergedArray = [...arr1, ...arr2];
// console.log(mergedArray);
// console.log(arr1);

var employees = [{
    id: 21,
    name : 'Pallavi'
},{
    id : 22,
    name : 'Nikhil'
}];
//console.log(employees);

var employee = {id :23,name:'Nitin'};
employees.push(employee);
console.log('after push',employees);

var employee = {id :24,name:'Neha'};
var newEmployeesArr = [...employees, employee];
console.log('after spread operator employees array',employees);
console.log('merged array after spread operator',newEmployeesArr);