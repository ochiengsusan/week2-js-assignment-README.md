//explicit conversion of string to number
let numberStr = '42';

numberStr = Number(numberStr);
console.log(numberStr, typeof numberStr)
//to convert string to number 
//use number constructor funtion

//explicit conversion of number to string
let num = 2023;
num = String(num);
console.log(num, typeof num)

//convert to boolean explicitly
let truthyValue = 'hello';
let falsyValue = 0;
truthyValue = Boolean(truthyValue);
falsyValue = Boolean(falsyValue);
console.log(truthyValue, typeof truthyValue)
console.log(falsyValue, typeof falsyValue)


