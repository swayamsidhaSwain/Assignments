//Print array using normal for loop

let arr =[1,2,3,4,5,6,7];

console.log("The elements in the array are:", arr);

console.log("Print array using normal for loop");
for( let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("--------------------------------------------------");
//print array using while loop
console.log("Print array using while loop");

let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

console.log("--------------------------------------------------");
//print array using for of loop
console.log("Print array using for of loop");

for(let value of arr){
    console.log(value);
}

console.log("--------------------------------------------------");
//print array using forEach()
console.log("print array using forEach()");

arr.forEach(function(value){
    console.log(value);
});

console.log("--------------------------------------------------");
//find sum of all elements using loop
console.log("find sum of all elements using loop");

let sum=0;

for(let i=0; i<arr.length; i++){
    sum+=arr[i];
}

console.log("The sum of all elements in the array is:", sum);


console.log("--------------------------------------------------");
//find largest number using loop
console.log("find largest number using loop");

let largest=arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
}
console.log("The largest number in the array is:",largest);

console.log("--------------------------------------------------");
//find smallest number using loop
console.log("find smallest number using loop");

let smallest=arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]<smallest){
        smallest=arr[i];
    }
}
console.log("The smallest number in the array is:",smallest);

console.log("--------------------------------------------------");
//count total element in array
console.log("count total element in array");

let count=0;
for(let i=0; i<arr.length; i++){
    count++;
    }
console.log("The total number of element in the array is:",count);

console.log("--------------------------------------------------");
//print elements inreverse order
console.log("print elements inreverse order");

let reverseArr=[];;
for(let i=arr.length-1; i>=0; i--){
    reverseArr.push(arr[i]);
    }
console.log("The elements in reverse order are:", reverseArr);