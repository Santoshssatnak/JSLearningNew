



var num1 = 100;
var num2 = 200;
console.log('Before swap ==>', num1, num2);

var temp = num1;
num1 = num2;
num2 = temp;
console.log('After swap ==>', num1, num2);

var hubby = "Virat";
var wife = "Anuksha";
console.log('Before swap ==>', hubby, wife);

var temp = hubby;
hubby = wife;
wife = temp;
console.log('After Swap ==>', hubby, wife);

var city1 = "Pune";
var city2 = "Mumbai";


console.log("====Function type: function with no arguments and no return value");
function myPersonalDetails(){
    console.log("Name: GK");
    console.log('city: Pune');
    console.log('PIN CODE: 123456');
    console.log(' Is Married: YES');
}
myPersonalDetails();







console.log("====Function type: function with arguments and no return value");
console.log("=====Swap=============");
function swap(valueOne, valueTwo) {   // function declaration
        console.log(valueOne, valueTwo);
        console.log('Before swap ==>', valueOne, valueTwo);

var temp = valueOne;
valueOne = valueTwo;
valueTwo = temp;
console.log('After Swap ==>', valueOne, valueTwo);
}
swap(100, 200);  // function call / invocation
swap(400,500);
swap("Virat", "Anuksha");
swap("Pune", "Mumbai");
swap("India", "USA");


console.log("====Function type: function with arguments and  return value");

function jenny(rs){
console.log('She went in market and bought vegetables');
var bag = "Vegetables required for a week"
return bag;

}
var result  =  jenny(100);



function square(num){
    var result = num * num;
    return result;
}
var squareNum = square(5);
console.log('Num is 5 and its square is:', squareNum);


console.log("===============================");
function addThreeValues(arg1, arg2, arg3){
console.log(arg1+arg2+arg3);
}
addThreeValues(10.43, 600, 40);
addThreeValues("Hello", "Good", "Morning");



