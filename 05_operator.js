console.log(`========  1.Arithmatic Operator=====`);
// + - *

var num1 = 10;
var num2 = 2;
var result = num1 + num2;
console.log(` Multiplication result is: ${result}`);

var result = num1 ** num2;
console.log(`  Exponential result is: ${result}`);


var result = num1 / num2;
console.log(`  Division result is: ${result}`);

var result = num1%num2;
console.log(` Modulus result is ${result}`);


console.log(`===========Uninary Operator========`);

var num1 = 10;
var result = num1++;  //  var num1 + 1;
console.log(`Result is ${result}`);

var num2 = 10;
var result = --num2;
console.log(`Result is of decrement is: ${result}`);



console.log(`===========Assignment Operator========`);

var num3 = 5;
// compound Addition +=
num3+=3;  // num3 = num3 +3;
console.log(`Result of Compound Addition is: ${num3}`);


var num3 = 5;
// compound Addition +=
num3-=3;  // num3 = num3 +3;
console.log(`Result of Compound Subtraction is: ${num3}`);



console.log(`===========Assignment Operator========`);
var str1 = "Focus";
var str2 = "Locus";
var result = str1 == str2;
console.log(` Result of comparision is: ${result}`);
console.log(typeof result);

var result = str1 == str2;
console.log(`Result of comparision === is: ${result}`);


var num1 = 10;
var num2 = "10";
var result = num1 == num2;
console.log(`Result of comparision == is: ${result}`);

var result = num1 === num2;
console.log(`Result of comparision == is: ${result}`);


var num3 = 20;
var result = num1!=num3;
console.log(` Result of comparision != is: ${result}`);


var result = num1 > num3;
console.log(` Result of Greater than > is: ${result}`);

var num4 = 20;
var result = num3 > num4;
console.log(`Result of Greater than > is ${result}`);

var result = 10 < num4;
console.log(`Result of less than < is: ${result}`);



// AND &&
// OR ||
// NOT !
// Jenny SSC Marks = 69   hscMarks = 60
// sscMarks greater than equal 60 AND HSC marks also greater than equal to 60


