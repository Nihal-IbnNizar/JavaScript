//Enter a number in the prompt and check if it is a multiple of 5

let num = prompt("Enter a number: ");

if(num%5 === 0){
    console.log(num, " is a multiple of 5")
}
else{
    console.log(num, " is NOT a multiple of 5")
}