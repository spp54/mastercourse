let Like1 = "cheese"
let NotLike1 = "dog"
let Like2 = "tomato"
let NotLike2 ="donkey"
let Like3 = "chicken"
let NotLike3 ="beef"

console.log("Pizza 1 = tomato, cheese and chicken")
console.log("Pizza 2 = beef, dog and donkey")

switch (Like1 && Like2 && Like3 ){
    case ("tomato"):
    case ("cheese"):
    case ("chicken"):
        console.log (`Pizza 1 works for me. I like ${Like1}, ${Like2} and ${Like3}`)
        break
    case ("beef"):
    case ("donkey"):
    case ("dog"):
        console.log (`I do not like ${NotLike1}, ${NotLike2} or ${NotLike3}`)
        break

}

