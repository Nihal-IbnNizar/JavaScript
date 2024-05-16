//for-of and for-in loops

let str = "JavaScripttt";

let size = 0;
for(let i of str){  //no need to initialize i
    console.log("i=", i);
    size++;
}
console.log("String size = ", size);





let student = {
    name: "Nihal",
    age: 22,
    cgpa: 8.5,
    isPass: true,
};

for(let key in student){
    console.log("Key=",key, "Value=", student[key]);
}