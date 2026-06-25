// Check String Palindrome

let str = "madam";

let   reversestr = str.split("").reverse().join("");

if (str === reversestr) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}   


//check number palindrome

let num = 12321;

let reverse = num.toString().split("").reverse().join("");
if (num.toString() === reverse) {
    console.log("The number is a palindrome.");
} else {
    console.log("The number is not a palindrome.");
}

//check all palindrome words in an array.

let words = ["madam", "racecar", "hello", "level"];

let palindromes = words.filter(word => {
    let reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
});
console.log("Palindromic words in the array:", palindromes)
