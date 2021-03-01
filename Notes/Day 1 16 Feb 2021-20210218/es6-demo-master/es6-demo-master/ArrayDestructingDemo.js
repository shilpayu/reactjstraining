var date = ['2021','02','16'];
console.log(date);

var year = date[0];
var month = date[1];
var day = date[2];
//  console.log(year);

 //es6
 //var [year1, month1, day1] = date;
 var [year1, ,day1] = date;
 console.log(year1);
 console.log(day1);

 var nestedArray = [10,20,[30,40], 50];

 var [a,b,[c,d], f] = nestedArray;
 console.log(nestedArray);
 console.log(a);
 console.log(c);
 console.log(d);