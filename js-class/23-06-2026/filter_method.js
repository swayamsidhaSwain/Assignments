
//Filter method in javascript

let arr = [3,2,8,7,9,10,1,4,6,5];

console.log("The elements in the array are:",arr);

//get all even numbers
console.log("get all even numbers");

let evenNumber = arr.filter((value)=>{
    return value%2===0;
});

console.log("The even numbers in the array are:",evenNumber);

console.log("--------------------------------------------------");
//get all odd numbers
console.log("get all odd numbers");


let oddNumber = arr.filter((value)=>{
    return value%2!==0;
}); 

console.log("The odd numbers in the array are:",oddNumber);

console.log("--------------------------------------------------");
//numbers greater than 50
console.log("numbers greater than 50");

let largest = arr.filter((value)=>{
    return value>50;
}); 

console.log("The numbers greater than 50 in the array are:",largest);

console.log("--------------------------------------------------");
//filter palindrome words
console.log("filter palindrome words");

let  names = ["madam","hello","level","world"];

let palindromWord = names.filter((word) =>{
    let reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
})
console.log("Palindromic words in the array:", palindromWord);