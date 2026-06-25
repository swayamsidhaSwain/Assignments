//Reduce method in javascript

let arr = [3, 2, 4, 5, 6, 8, 9, 1, 7, 10];

console.log("The all element in the array: ", arr);

//Find sum of array elements
console.log("Find sum of array elements");

let sum = arr.reduce((sum, arr) => {
    return sum + arr;
});

console.log("The sum of all element in the array: ", sum);

console.log("-------------------------------------------");
//Find product of array elements
console.log("Find product of array elements");

let product = arr.reduce((pro, arr) => {
    return pro * arr;
});

console.log("The product of all element in the array: ", product);


console.log("-------------------------------------------");
//Find maximum number
console.log("Find maximum number of array elements");

let maxNumber = arr.reduce((max, arr) => {
    return arr > max ? arr : max;

}, arr[0]);

console.log("The maximum element in the array: ", maxNumber);

console.log("-------------------------------------------");
//Find minimum number
console.log("Find minimum number of array elements");

let minNumber = arr.reduce((min, arr) => {
    return arr < min ? arr : min;

}, arr[0]);

console.log("The minimum element in the array: ", minNumber);

console.log("-------------------------------------------");
//count total character
console.log("count total character");

let words = ["js", "React", "node"];

let totalChar = words.reduce((char, string) => {
    return char + string.length;
}, 0);

console.log("The total number of character is: ", totalChar);

console.log("-------------------------------------------");
//count occurrences os elements
console.log("count occurrences os elements");

let fruits = ["apple", "banana", "apple", "orange", "apple"];

let totalCount = fruits.reduce((fruit, conut) => {
    fruit[conut] = (fruit[conut] || 0) + 1;
    return fruit;
}, {});

console.log(totalCount);

console.log("-------------------------------------------");
//count occurrences os elements
console.log("count occurrences os elements");