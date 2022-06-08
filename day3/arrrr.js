const guitars =[
    "Fender - Notbad",
    "Strat - nottobad", //array
    "Banjo - Amusing"
]
console.log (guitars[0])
console.log (guitars[1])
console.log (guitars[2])

guitars[2] = "ukelele - silly"
console.log(guitars.length)
guitars.pop(); //removes last element
console.log(guitars.length)
guitars.push("hello - goodbye") //add element to array
console.log(guitars)
guitars.shift()
console.log(guitars)
guitars[guitars.length]= "added this to may array"
console.log(guitars)
guitars.splice (0, 1, "zero", "one")
console.log(guitars)



