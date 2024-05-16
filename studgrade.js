let score = prompt("Enter your score: ");

let grade;

if (score >= 90 && score<= 100){
    grade = "Grade: A";
} else if(score >= 70 && score<= 89){
    grade = "Grade: B";
} else if(score >= 60 && score<= 69){
    grade = "Grade: C";
} else if(score >= 50 && score<= 59){
    grade = "Grade: D";
} else if(score >= 0 && score<= 49){
    grade = "Grade: Fail!";
}

console.log(grade);