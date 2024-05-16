let gameNum = 25;

let userNum = prompt("Guess the game number: ");

while (userNum != gameNum){
    userNum= prompt("You entered the wrong number. Guess again: ");
}

console.log("Congratulations! You've made the right guess!!");