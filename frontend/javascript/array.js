const fruits = ["Banana", "Watermelon", "Mango","Orange"]
console.log(typeof(fruits))
fruits.push("Apple") //add new elemets at end
console.log(fruits)
fruits.unshift("JackFruit") //add new elemt at start
console.log(fruits)

fruits.pop() //remove last index element
fruits.shift() //remove 0 index element 
console.log(fruits)

fruits.splice(0, 2) //for delete 2 elemets from index 0
console.log(fruits)

fruits.splice(1, 0, "Grapes","Cherry" ) //for add 2 elemets from index 1
console.log(fruits)



const num1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
lenNum1 = num1.length
for(let i = 0;i<lenNum1; i++){
    console.log(num1[i])
}
for(index in num1){
    console.log(index)
}

for(value of num1){
    console.log(value)
}
const evenArray = []
for(let i=0;i<=lenNum1; i++){
    if(num1[i] % 2 == 0){
        console.log(num1[i])
        evenArray.push(num1[i])
    }
}
console.log(evenArray)

num1.map((value, index)=>{
    console.log("value",value,"Index", index)
})

fruits.map((elmt)=>console.log(elmt))

const evenArr2 = num1.filter((v)=>v % 2 == 0)
console.log(evenArr2)

const oddArray = num1.filter((elmt)=> elmt % 2 != 0)
console.log(oddArray)

const newArray1 = num1.map((value)=> value ** 3)
console.log(newArray1)

products = [
    {id:1, title:"iPhone",price:1234567,cat:"Electronics"},
    {id:2, title:"iPhone15",price:4567,cat:"Electronics"},
    {id:3, title:"Samsung",price:12367,cat:"Electronics"},
    {id:4, title:"Shirt",price:567,cat:"Cloths"},
    {id:5, title:"T-Shirt",price:5467,cat:"Cloths"},
    {id:6, title:"Hoodie",price:67,cat:"Cloths"},
    {id:7, title:"Shoes",price:4567,cat:"Accessaries"},
    {id:6, title:"Ring",price:5670,cat:"Accessaries"}
]