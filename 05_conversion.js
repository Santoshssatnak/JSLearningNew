

var n1 = "20";
var n2 = 20;
console.log(n1==n2);

console.log(n1, typeof n1);
n1=+n1;
console.log(n1, typeof n1);


console.log('4'-true);
console.log(`Ans: '4' implicit converted to 4 (num) and true (Boolean)`);


console.log('====Explicit Conversion====');
// String to Number
// 1. Using + Operator
// 2.Number
var n1 = "20";
var n2 = Number(n1); //Number("30");
console.log(n2, typeof n2);

var isMarried = true;
var result = Number(isMarried);
console.log(result, typeof result);

console.log('============================');
var n4 = 30;
String(n4);
var result =String(n4);
console.log(result, typeof result);


