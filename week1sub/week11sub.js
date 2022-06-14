console.log()
//Dot notation
//This is how Java separates a object from a property of
//that object


let greet = ("hello!!!")  //assign text to variable greet
console.log("What is dot notation in Java.".toUpperCase())
console.clear //clear the console
console.log() //go to next line of console
console.log(greet) // send contents of variable greet to console
console.log() 
// To the left of the dot is what i want to work with (The console)
// to the right of the dot is what i want to do (send text to the console 'log')


//Variables. These are data storage units
//which once declared can be used
// anywhere in the code

//Variables (activity1)
let age = ("57")
const firstName = ("Joseph")
const secondName = ("Bloggs")
let colour = ("RED")

console.log("variables(activity 1)")
console.log (`My name is ${firstName} ${secondName} I am ${age} years old and my favorite colour is ${colour}.`)
console.log()


//Variables (activity2)
//create variables
let Brekky1 = "eggs"
let Brekky2 = "bacon"
let Brekky3 = "tomatoes"
let Lunch1 = "tuna"
let Lunch2 = "potato"
let Lunch3 = "salad"
let Dinn1 = "fish"
let Dinn2 = "chips"
let Dinn3 ="beans"

//output to screen
console.log("variables (activity 2)".toUpperCase())
console.log (`For breakfast I had ${Brekky1}, ${Brekky2} and ${Brekky3}`)
console.log (`For lunch I had ${Lunch1}, ${Lunch2} and ${Lunch3}`)
console.log ("For Dinner I had " + (Dinn1) + " " + (Dinn2) + " and " + (Dinn3))
console.log()


//Java data types.
// from https://www.w3schools.com/java/java_data_types.asp
//int myNum = 5;               // Integer (whole number)
//float myFloatNum = 5.99f;    // Floating point number
//char myLetter = 'D';         // Character
//boolean myBool = true;       // Boolean
//String myText = "Hello";     // String
// Undefined. Used when a variable is declared but not given a value.




let DayYearStart = (1)
let DayYearEnd = (365)
let MyBday = (20)
let CurrentDay = (158)

console.log("string methods and operators(activity 3)".toUpperCase())
console.log(`Today is June 7th the ${CurrentDay},th day of the year`)
console.log (`My birthday is 20th January thats day ${MyBday} of the year.`)
console.log(`There are ${DayYearEnd} in a year`)
console.log(`Therefore there are ${DayYearEnd - (CurrentDay + MyBday)} days before my next birthday`)
console.log(`which means that it has been ${CurrentDay - MyBday} since my last birthday`)


// string manipulation (activity 4)
// variables
let space1 =("x")
let space2 =("o")
let space3 =("x")
let space4 =("o")
let space5 =("x")
let space6 =("o")
let space7 =("x")
let space8 =("o")
let space9 =("x")
// display board with variables inside board
console.log()
console.log()
console.log("string manipulation (activity 4)".toUpperCase())
console.log("")
console.log("     |     |")
console.log("     |     |")
console.log(" " + (space1)+"   |  " + (space2)+ "  |   " + (space3)) 
console.log("     |     |")
console.log("     |     |")
console.log("---------------")
console.log("     |     |")
console.log("     |     |")
console.log(" " + (space4)+"   |  " + (space5)+ "  |   " + ( space6)) 
console.log("     |     |")
console.log("     |     |")
console.log("---------------")
console.log("     |     |")
console.log("     |     |")
console.log(` ${space7}   |  ${space8}  |   ${space9}`)
console.log("     |     |")
console.log("     |     |")


//Arithmetic operators
// from https://www.w3schools.com/java/java_operators.asp
//+ 	Addition 	    Adds together two values 	            x + y 	
//- 	Subtraction 	Subtracts one value from another 	    x - y 	
//* 	Multiplication 	Multiplies two values 	                x * y 	
///     Division 	    Divides one value by another 	        x / y 	
//% 	Modulus 	    Returns the division remainder 	        x % y 	
//++ 	Increment 	    Increases the value of a variable by 1 	++x 	
//-- 	Decrement 	    Decreases the value of a variable by 1 	--x

// arithmetic example
let x = (2.9345)
let y = (10)
let a = (100)
let b = (40)
let sum =(x+y+a+b)
let mult =((x*y)+(a*b)) // java calculates inside the brackets 1st then the addition
console.log()
console.log("ARITHMETIC EXAMPLE")
console.log(`SUM OF  ${x}+${y}+${a}+${b} =  ${sum}`)
console.log (`${x} x ${y} + ${a} x ${b} = ${mult}  `)


//IF.. THEN.. ELSE IF.. AND ELSE
//If something is equal to that, do this, else do the other.

//Age tester (activity 1)
console.log()
console.log("Age Tester")
let ages = (17)
let country = ("Up")

if (ages >= 17 && country == "UK")
{
    console.log(`You are old enough to drink in the ${country}`)
}
else if (country != "UK"){
    console.log(`You maybe to young to drink in ${country}`)
    }
else{
    console.log("You are to young to drink in any country")
}

//SWITCH
// Using 'switch' to make decisions
let topping = ("chives")

console.log()

console.log("Pizza topping selection using switch (Activity 2)")
switch (topping){
    case topping = ("tomato"):
        console.log(`${topping}s These are important ingrdients in my pizza`)
        break
        case topping = ("chicken"):
            console.log(`I don't mind having ${topping} on my pizza`)
            break
    case topping = ("pepproni"):
            console.log(`${topping}s"These are important ingredients in my pizza"`)
            break 
    case topping = ("chives"):
            console.log(`${topping} should not be on my pizza`)
            break

}
//Switch is easier to use and more readable


//If else. (Activity 3)
let password = "notmypassword"
console.log()
console.log("PASSWORD LENGTH TEST. (ACTIVITY 3)")
if (password.length < 8){ //use the 'length' property to get the length of string password 
    console.log("password to short") // print this if string length is less then 8
}
else {
    console.log ("Password longer than 8 characters") //print this if string is
    // 8 characters or more
}



// if else AND. Divisable 3,5 or 3 and 5 (Activity 4)
let num = (30) 
console.log()
console.log("if else AND. Divisable by 3,5 or 3 and 5")
if (num % 3 == 0 && num % 5 == 0){ 
    console.log (`The number ${num} is diviable by 3 and 5`)
}
else if (num % 3 == 0){
    console.log(`The number ${num} is divisable by 3`)
}
else if (num % 5 == 0){
    console.log(`The number ${num} is divisable by 5`)
}
else{
    console.log(`The number ${num} is NOT divisable by 3 and 5`)
}


//Same as above but consoling fizz, buzz and fizzbuzz for 3,5 or 3 and 5 respectfully
//Activity 5
let numb = (33)
console.log()
console.log("Activity 5")
console.log("FIZZ,BUZZ,FIZZBUZZ")
console.log()

if (numb % 3 == 0 && numb % 5 == 0){
    console.log ("Fizz Buzzzzzzzzz")
}
else if (numb % 3 == 0 ){
    console.log ("Fizz")
}
else if (numb % 5 == 0){
    console.log ("Buzzzzzzzzz")
}
else{
    console.log(`The number ${numb} is NOT divisable by either 3,5 or 3 and 5 (Buurrp!)`)
}


//Activity 7
// Test whether a number a palindrome or not
let numo = (223322)
console.log()
console.log("Activity 7")
console.log("Test whether a number is a palindrome or not")
let r = numo.toString().split('').reverse().join('');
// converts integer to string then reverses the string order

if (numo == r){
    console.log (`${numo} is a palindrome`)
    //if reversed string is equal to original string then string id palindrome
}
else {
    console.log(`${numo} is NOT a palindrome`)
}



//Activity 7
//Home,Work or commuting
console.log()
console.log("Activity")
console.log("Home,Work or commuting")
console.log()

let placeOfWork = ("office")
let time = (8)
let travelling = ("Commuting")
let home =("At Home")

if (time < 7 || time > 18)
{
    console.log (`Its ${time} hrs hours I'm ${home}`)
}
else if (time >= 7 && time <= 8 || time >= 16 && time <= 18)
{
   console.log(`Its ${time} hrs I'm ${travelling}`)
}
else if (time > 9 && time < 16){
    console.log(`Its ${time} hrs I'm at the ${placeOfWork}`)
}

//Acivity 8
// Find index of last vowel  in string
console.log()
console.log("Acivity 8")
console.log("Find index of last vowel  in string")
console.log
let lString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let lenstring = lString.length
console.log (`String Length = ${lenstring}`)
console.log (`Therefore index of last vowel is ${lenstring} which is the letter 'i'`)




//Activity 9
// Is the last letter of a string the same as the first
console.log()
console.log("Activity 9")
console.log("Is the last letter of a string the same as the first")
console.log()

let wordyy = ("momentux")
let long = (wordyy.length - 1)
console.log (`string is ${wordyy}`)
console.log(`string length is ${long + 1}`)
console.log(`first character is ${wordyy[0]}`)
console.log(`last charater is ${wordyy[long]}`)
if (wordyy[0] == wordyy[long]){
    console.log(true)
}
else console.log(false)


//Activity 10
// add two numbers together
// if the result is an even number print the number
// if the result is not even multiply the 2 number together and disply result
console.log()
console.log("Activity 10")
console.log("add two numbers together")
console.log("if the result is an even numbers print the number")
console.log("if the result is not even multiply the 2 number together and disply result")
console.log()

let nuum1 = (10)
let nuum2 = (11)
let nuumSum = (nuum1 + nuum2)

if ((nuum1 + nuum2) % 2 == 0)
{
    console.log(`Result is ${nuumSum} which is an even number`)
}
else console.log(`Result is ${nuumSum} which is odd therefore ${nuum1} X ${nuum2} = ${nuum1*nuum2}`)

//Activity 1
//Make an array of 3 songs and send them to the console
//Use a metho to add 2 more songs
//Use a method to remove the last song from the array

console.log()
console.log("Activity 1")
console.log("Make an array of 3 songs and send them to the console")
console.log("Use a metho to add 2 more songs")
console.log("Use a method to remove the last song from the array")
console.log()

let music = [  //create array
    "Astradyne",
    "Black Betty",
    "Autobahn"
]

music.push("Bring on the Dancing Horses")// add 2 more songs
music.push("Drive")
console.log(music)
music.pop() //delete last song from array
console.log(music)

// Activity 2
// Create program to demonstrate the splice method
// from https://developer.mozilla.org/en-US/docs/Web
// /JavaScript/Reference/Global_Objects/Array/splice
//Array.prototype.splice()
//The splice() method changes the contents of an array by removing 
//or replacing existing elements and/or adding new elements in place

console.log("Activity 2")
console.log("Create program to demonstrate the splice method")
console.log("from https://developer.mozilla.org/en-US/docs/Web")
console.log("/JavaScript/Reference/Global_Objects/Array/splice")
console.log("The splice() method changes the contents of an array by removing")
console.log("or replacing existing elements and/or adding new elements in place")
console.log()

const dayOfWeek = ['Monday', 'Wednesday', 'Friday', 'Sunday']
dayOfWeek.splice(1, 0, 'Tuesday')
// inserts at index 1
dayOfWeek.splice(1, 3, 'Thursday')


console.log(dayOfWeek);
// expected output: Array ["Monday"]

dayOfWeek.splice(3, 1, 'Saturday')
// replaces 1 element at index 4
console.log(dayOfWeek)
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

//LOOPS
// Loops are used to perform repetitive processing on stored data

//Activity 1
//Create an array that lists 5 films
// add 2 more films to the array using a method
// use a loop to cycle through the array


console.log()
console.log("LOOPS")
console.log("Activity 1")
console.log("Create an array that lists 5 films")
console.log("add 2 more films to the array using a method")
console.log("use a loop to cycle through the array")
console.log()

let films =[
    "Star Wars",
    "Year of the Dragon",
    "Body of Lies",
    "Sunshine",
    "Event Horizon"
]
films.push("Paddington")
films.push("True Lies")

for (lo = 0; lo < films.length; lo++)
{
console.log(films[lo])
}


//Activity2
//generate 6 random numbers and then display them to the console

console.log()
console.log("Activity2")
console.log("generate 6 random numbers and display them to the console")
console.log()


for (cou = 0; cou <6; cou++){
    randomNum = (Math.floor(Math.random() * 10))  // generate a number0 to 10
    console.log(randomNum) // display the number to the console
}

//activity3
//Create a program that counts down from 9 to 0

console.log()
console.log("activity 2")
console.log("Create a program that counts down from 9 to 0")
console.log

for (liftOff = 9; liftOff > -1; liftOff--){
    console.log(liftOff)
}

//activity 4
// display 4 films stored in an array
// use for loop to display them
// use 'if' to show if third film is ghostbusters

console.log()
console.log("activity 4")
console.log("display 4 films stored in an array")
console.log("use for loop to display them")
console.log("use 'if' to show if third film is ghostbusters")
console.log()

let filmy =[
    "Star Wars",
    "Year of the Dragon",
    "Ghostbusters",
    "Sunshine"
]

for (dis=0; dis < filmy.length; dis++ )
{
console.log(filmy[dis])
}
if (filmy[2] == "Ghostbusters"){
    console.log("Yay its Ghostbusters")
}
else console.log("Boo")


//activity 5
// Generate random numbers between 1 and 30 6 times
// for each number generated check if divisable by 7
// If diviable by 7 log to console

console.log()
console.log("activity 5 ")
console.log("Generate random numbers between 1 and 30 6 times")
console.log("for each number generated check if divisable by 7")
console.log("If divisable by 7 log to console")
console.log()

for (cou = 0; cou <6; cou++){
    randomNum = (Math.floor(Math.random() * 30));  // generate a number0 to 30
    console.log(randomNum) // display the number to the console
    if (randomNum % 7 == 0){
        console.log("Divisable by 7")
}
}

//Activity 6
//Create 2 arrays containing 4 names
//create a nested loop which identifies which names are in both groups

console.log()
console.log("activity 6 ")
console.log("Create 2 arrays containing 4 names")
console.log("create a nested loop which identifies which names are in both groups")
console.log()
console.log()

let mongo = [
    "John",
    "Jane",
    "Adam",
    "Dave"
]

let fish = [
    "Alan",
    "July",
    "Adam",
    "Dave"
]
let leFish = fish.length
let leMongo = mongo.length
for (z = 0; z < leFish; z++) // nested loop compares each name in one group 
// with all the names in the other group
//and only prints to the console when it gets a match
{
    for (y = 0; y < leMongo; y++)
    {
        if (fish[z] == mongo[y])
        {
            console.log (`${fish[z]} is in both groups`)
        }
    }
}

//Activity 7
// Pro's and con's and examples of while loop, for loop and do while loop

console.log()
console.log("Activity 7")
console.log("Pro's and con's and examples of while loop, for loop and do while loop")
console.log()

//For Loop. The code executes a known number of times.
//Best used when the number of loops is constant and known

//While Loop. This loop constantly watches a boolean condition
//if the condition changes the loop stops.
//Best used to loop when a condition is True or False

//Do While. 
//Very similar to while loop except one iteration is performed
// before the condtion is checked.
// Best used if loop is to be ran at least once

//for loop example
console.log("For Loop example")
console.log()
for(q = 0; q != 20; q++)
{
    console.log(q)
}


//while loop example
console.log()
console.log("while loop example")
let d = (0)

while (d <= 20)
{
   d++ 
   console.log(d)
}

//do while loop exapmple
console.log()
console.log("do while loop example")
let g = (0)

do {console.log(g);g++} while (g < 20) 



//Functions
//Activity 1
// Turn the following code into arrow function syntax

console.log()
console.log("Functions")
console.log("Turn the following code into arrow function syntax")
console.log()

//function factorial = (n)  {
//    if ((n == 0) || (n == 1)) 
//    { 
//        return 1
//}
//else 
// {
//        return ( n * factorial (n - 1))
// }
//}
//console.log (`The factorial of ${k} is ${factorial(10)}`)


// Above code in arrow function syntax
let k = (10)

const factorial = (n) => {
    if ((n == 0) || (n == 1)) 
    { 
        return 1
}
else 
 {
        return ( n * factorial (n - 1))
 }
}
console.log (`The factorial of ${k} is ${factorial(10)}`)


//Activity 2
// Edit Code below to include 2 parameters
// and update count updated with every order
console.log()
console.log("Activity 2")
console.log("Edit Code below to include 2 parameters")
console.log()


//let orderCount = 0

//const takeorder = (topping) => {
//   console.log (`pizza with ${topping1} and ${topping2}`)}
//takeorder("tomato", "chicken")
//takeorder("pepperoni", "beef")
//takeorder("tomato", "donkey")


let orderCount = 0

const takeorder = (topping1, topping2, ) => {
    console.log (`Order count = ${orderCount}`)
    console.log (`pizza with ${topping1} and ${topping2}`)
    orderCount++
   
}
takeorder("tomato", "chicken")
takeorder("pepperoni", "beef")
takeorder("tomato", "donkey")

//Activity3
// Cash Machine that Dispenses cash if your pin number is correct and your 
//balance is equal to, or more than, the amount you’re 
//trying to withdraw
console.log()
console.log("activity3")
console.log("Cash Machine")
console.log()

let pin = (1234)
let balance = (4000)
let account = (123457863)
let withdraw = (500)

const takeOut = () =>{
    console.log (`Your balance is £${balance}`)
    console.log (`You wish to withdraw £${withdraw}`)
    console.log("\n")
    console.log(`£${balance} minus £${withdraw} will leave a balance of £${balance - withdraw}`)
    console.log("\n")
    if ((balance - withdraw < 0)) {
        console.log("You do not have enough Funds")
    }
    else
    {
    console.log(`Please take your £${withdraw} from the dispenser below and watch out for the mugger behind you`)
    }
}

const giveBalance = (balance) => {
    //console.clear()
    console.log(`Your account number is ${account}`)
    
    takeOut()
}

const checkPin = () => {
    if (pin == 1234){
        console.log("Pin Correct")
        console.clear()
        giveBalance(balance)
    }
    else{
        console.clear()
        console.log("Pin is incorrect")
        
    }
}
checkPin(pin)


//Objects
//Activity1
// Create an object called person, give some values of name and age
// Then create a function to console log one of the values.
console.log()
console.log("Objects")
console.log("Activity 1")
console.log("Create an object called person, give it some values of name and age")
console.log("Then create a function to console log one of the values.")
console.log

const person = {
    name: "Joseph",
     age: 57
}
const sayHi= () => {
    
    console.log(`Hello my name is ${person.name}`)
}
sayHi()


// Activity2
// Create an object called pet with the key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return a 
// string saying [Your Pet Name] is eating/drinking.

console.log()
console.log("Activity2")
console.log("Create an object called pet with the key values of:")
console.log("name, typeOfPet, age, colour")
console.log("And methods called eat and drink. They should return a")
console.log("string saying [Your Pet Name] is eating/drinking.")
console.log()

const pet = {
     name: "George",
typeOfPet: "cat",
      age: 9,
   color: "Black",

eat:()=>
{
    return `Your ${pet.color} ${pet.typeOfPet} ${pet.name} is eating pigeons`
},
drink:()=>
{
    return `${pet.name} the ${pet.typeOfPet} is ${pet.age} years old. He should not be drinking Guiness`
}

}
console.log(pet.eat())
console.log(pet.drink())


//Activity 3
//Create an object called coffeeShop with key values of: 
//branch, drinks with prices, food with prices
//And methods called drinksOrdered and foodOrdered
//They should return a string saying [Your order] is … with all 
//items chosen with costs and total costs.

console.log()
console.log("Activity 3")
console.log("Create an object called coffeeShop with key values of:")
console.log("branch, drinks with prices, food with prices")
console.log("And methods called drinksOrdered and foodOrdered")
console.log("They should return a string saying [Your order] is … with all")
console.log("items chosen with costs and total costs.")
console.log()


const coffeeShop = {
    branch: "Olive",
    drinks: [
        "cappuccino",
        "Latte",
        "Filter Coffee",
        "Tea",
        "Hot Choclate, ",
    ],
    foody: [
        "Ham Sandwich",
        "croissant",
        "Egg Sandwich",
        "Big Breakfast",
        "Egg on toast",
    ],
    cappa: (2.50),
    latte: (3.00),
    filter:(1.75),
       tea:(1.00),
      hotc:(1.50),
     eggss:(2.50),
      Bigb:(4.50),
      eonT:(3.00),
      hams:(2.00),
     croii:(2.42),
 
     foodOrdered:() =>
     {
         return `Your order. 2 ${coffeeShop.foody[3]}s at £${coffeeShop.Bigb} each `
     },
     drinksOrdered:() =>
     {
         return `and 2 ${coffeeShop.drinks[1]}s at £${coffeeShop.latte} each gives a total of £${(2*coffeeShop.Bigb)+(2*coffeeShop.latte)}`
     },
         
}
console.log(coffeeShop.foodOrdered())
console.log(coffeeShop.drinksOrdered())

//END of file
