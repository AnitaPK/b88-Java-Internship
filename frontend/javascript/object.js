const student = {
    name:"Doremon",
    age:17,
    isfamous :true,
    characters:["Nobita","Gian","Suneo"],
    timing:{
        monday:"10AM",
        sunday:"12PM"
    },
    greet:function (){
        return "Hello "+ this.name
    }
}
console.log(typeof(student))

console.log(student.name)
console.log(student.isfamous)
console.log(student.timing.sunday)
console.log(student.greet())

student.timing.monday = "10AM-5PM"
student.age = 18
student.gadget = "time machine"

console.log(student)

// delete student.age 


console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))

for (x in student){
    console.log(x)
}



