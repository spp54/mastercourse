let num = (105)

if (num % 3 == 0 && num % 5 == 0){
    console.log ("Fizz Buzzzzzzzzz")
}
else if (num % 3 == 0 ){
    console.log ("Fizz")
}
else if (num % 5 == 0){
    console.log ("Buzzzzzzzzz")
}
else{
    console.log(`The number ${num} is NOT divisable by either 3,5 or 3 and 5 (Buurrp!)`)
}