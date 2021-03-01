// var abc = function() {
//     console.log("using arrow functions");
// }

// abc();

// //es6 arrow functions concept
// var abc1 = () => {
//     console.log( "using es6 feature arrow function");
// }
// abc1();
//var abc = () => "jjdkfj";
var abc = () => {
    console.log("inside arrow function");
   return  "using es6 features";
}

console.log(abc());

// var addition = (a,b) => {
//     return a+b;
// }
var addition = (a,b) => a+b;

console.log('sum',addition(2,3));
var printMessage = message => "welcome"+message;

console.log(printMessage("to the javascript world"));