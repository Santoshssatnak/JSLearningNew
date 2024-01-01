//WAP to the addition of numbers  1 to 10 

var sum = 0; // 0
for (let index = 0; index <=10; index++) {
    sum = sum + index;  // 0 + 0
    
}
console.log(`Addition of 1 to 10 is: ${sum}`);

console.log('=======================================');
// WAP to Reverse the string
var str = "Developer";
var reverseStr = "";

for (let index = str.length-1; index >=0; index--) {
    reverseStr = reverseStr + str.charAt(index);
    
}
console.log(`Reverse String is: ${reverseStr}`);

console.log('==============================================');
// Count the Vowels
var str = "I an UI Developer";
var count = 0;
var vowelCap = "AEIOU"; 
for (let index = 0; index <str.length-1; index++) {
    var char = str.charAt(index).toUpperCase();
    if (vowelCap.includes(char)) {
        count = count + 1;
    }
    
}
console.log(`Total number of vowels are: ${count}`);

console.log('------------------------------------------');

// 1*1  +  2*2  +  3*3  +  4*4  +  5*5
 



