function greet(){
    console.log("Welcome to Javascript")
    return "This is my first day of JS"
}
greet()

function add(n1,n2){
    console.log(n1+n2)
}
add(10,89)

function addWithReturn(a1,a2){
    return a1+a2;
}
add1089 = addWithReturn(10,89)
console.log("this is with return keyword",add1089)


// arrow function  

/* 


*/

// const subtract = () =>{}
// const subtract = (q1,q2) =>q1-q2

// const subtract = (q1,q2) =>console.log(q1-q2)

// const subtract = (q1,q2) =>{
//     return q1-q2
// }


// 1. create a function to check number is odd or even 

function checkOddEven(num){
    if(num % 2 == 0){
        return "even"
    }else{
        return "Odd"
    }
}

console.log("given number is ", checkOddEven(5))

// create function for grade system 
// 0-34 => Fail 
// greater than 34 to 60 => C 
// greater than 60 to 75 => B 
// greater than 75 to 100 => A 

function result(marks){
    if(marks >= 0){
        if(marks>=0 && marks <=34){
            console.log("FAIL")
        }else if(marks >=35 && marks <60) {
            console.log("C ")
        }else if(marks >= 60 && marks < 75){
            console.log("B ")
        }else {
            console.log("A ")
        }
    }
}

result(25)
result(90)
result(60)

// 3. create function to show today is which day 

const today = new Date()
const day = today.getDay()

switch (day){
    case 1: 
        console.log("monday")
        break
    case 2: 
        console.log("Tuesday")
        break

    case 3: 
        console.log("Wednesday")
        break

    case 4: 
        console.log("Thursday")
        break

    case 5: 
        console.log("Friday")
        break

    case 6 :
        console.log("Holiday")
        break

    case 7:
        console.log("Holiday")
        break

    default:
        console.log("Not valid on EARTH")
}

// 4. print 17 table using for loop 


for(let i=1; i<=10; i++){
    console.log("17 * ", i, " = ", 17*i)
}

// 5. print table of 17 using while loop 

i = 1
while(i<=10){
    console.log("17 * ", i, " = ", 17*i)
    i++
}

// print * pattern 



//                        *
//                        * * 
//                        * * *
//                        * * * *
//                        * * * * *

for(i=1;i<=5; i++){
    line = ''
    for(j=1; j<=i; j++){
        line = line + " *"
    }
    console.log(line)
}

//                        * * * * *
//                        * * * * 
//                        * * * 
//                        * * 
//                        * 



str = "Wisdom Sprouts"

console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.charAt(5))

console.log(str.slice(0, 5))
// console.log(str.splice())

console.log(str.replace("Sprouts", "Sprouts IT Training Hub"))


// array 
// array iteration
// array methods 
// object 

// DOM 
