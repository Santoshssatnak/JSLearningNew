
console.log("========Length property==========");
var greet = "Good Morning";
var result =greet.length;
console.log("Total length of the string is",result);




console.log("==============charAt0==========");

var charAt0 = greet.charAt(0);
console.log("Character at index 0 is:", charAt0);
console.log("Character at index 0 is:", greet.charAt(5));


console.log("==========Last Index=========");

console.log("Character at index 11 is:", greet.charAt(11));


// Find the 3rd last character


console.log("Find the 3rd last character:", greet.charAt(greet.length-1));


console.log("=========Concatination=============");

var firstName = "Jenny";
var lastName = "Gates";
var result = firstName.concat(lastName);
console.log(result);


console.log("========IndexOf========");
var IndexOfM = greet.indexOf('M');
console.log('Index Of M Is:', IndexOfM);

console.log(greet.indexOf('nin'));

console.log(greet.indexOf('z'));

console.log("Index of char D is:",greet.indexOf('D'));


console.log("Index of char o is:",greet.indexOf('o'));



console.log("============Replace of===========");
var result = greet.replace('Morning', 'Afternoon');
console.log(result);


var result = greet.replace(' ', "_");
console.log(result);



console.log("=========To Upper Case or To Lower Case=====");


console.log("=====Trim Method=====");

var str = "   Good Afternoon  ";
console.log(" Length before trim :", str.length);

var result = str.trim();
console.log(" Length after trim :", result.length);


var city = "    My city is Pune      ";
var beforeTrim = city.length
var cityAfterEndTrim = city.trimEnd();
var lengthAfterEndTrim = cityAfterEndTrim,length;


