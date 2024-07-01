/*const fruits=["mango","pineapple","avacado","banana"];
//let copyoffruits=fruits.slice(-2);
fruits.splice(1,0,'orange')
 console.log(fruits);
**/

//let vegetables = ['Carrot', 'Potato', 'Tomato', 'Cucumber', 'Pepper', 'Lettuce'];
//vegetables.splice(2,3);
//vegetables.splice(2,2,'Brocoli',`spinach`);
//console.log(vegetables);
//USING THE REDUCE METHOD TO CALCULATE TOTAL
let numbers =[10,20,30,50]
let total =numbers.reduce ((a,b)=>a+b,0);
//where a is the current total =0, b is the current value , 0 is the initial  value
console.log(total)

using find 
let findItem =vegetables.Find(element)=>
    element=='carrot'
let FoundNumber=numbers.find(element)=>
    element>30