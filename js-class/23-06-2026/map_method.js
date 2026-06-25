
//Map method in javascript

let arr = [7,2,3,1,4,6,8,5,9,10]

console.log("The element in the array are:",arr);

// Square every element
console.log("Square every element");

let square = arr.map((value) => {
    return value * value;
});

console.log("The square of all elements in the array is:", square);

console.log("--------------------------------------------------");
// Double every element
console.log("Double every element");

let double = arr.map((value) => {
    return value * 2;
});

console.log("The double of all elements in the array is:",double);

console.log("--------------------------------------------------");
// add 10 to every element
console.log("add 10 to every element");

let add = arr.map((value)=>{
    return value +10;
});

console.log("The added value of all elements in the array is:",add);

console.log("--------------------------------------------------");
console.log("");
console.log("");
console.log("");

let names=["swayam","anshu","amar","piyush","shubham","priyanshu"];
console.log("The all elements in the array is:",names);

// convert every element to uppercase
console.log("convert every element to uppercase");

let upperCase = names.map((value)=>{
    return value.toUpperCase();

})

console.log("The uppercase of all elements in the array is:",upperCase);

console.log("--------------------------------------------------");
// convert every element to lowercase
console.log("convert every element to lowercase");

let lowerCase = names.map((value)=>{
    return value.toLowerCase();

})

console.log("The lowercase of all elements in the array is:",lowerCase);

