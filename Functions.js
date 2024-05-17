//output of a function can be obtained by calling the func in the console.

function countVowels(str) {
    let count = 0;
    for(const char of str){
        if(char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u") {
            count++;
        }
    } 
    return count;
}



//similar function with arrow function

const countVow = (str) => {
    let count = 0;
    for(const char of str){
        if(char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u") {
            count++;
        }
    } 
    return count;
}


//forEach loop; exclusively for arrays-takes value at each index

let nums = [2,3,4,5,10];

nums.forEach((num) => {
    console.log(num * num);
});

//same function using callback property
let calcSquare = (num) => {
    console.log(num * num);
}

nums.forEach(calcSquare);


//map method -creates a new array
console.log(nums);
let newArr = nums.map((val) => {
    return val *2;
});
console.log(newArr);

//reduce method-
//filter method-