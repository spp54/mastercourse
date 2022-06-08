let Like = "cheese"
let NotLike2= "tomato"

switch (Like || NotLike2){
    case ("tomato"):
    case ("cheese"):
    case ("chicken"):
        console.log (`I like ${Like} and ${NotLike2}`)
        break
    case ("beef"):
    case ("pepper"):
    case ("dog"):
        console.log ("do not like this")

}

