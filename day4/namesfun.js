const name1 = {
    name:"John",
    secondName: "Bloggs",
    age: 57,
    sex:"Male",
    Interests: [
        "guitar",
        "Computer Networking",
        "Keep Fit"
    ]
}
// Values in arrays can be any data even arrays or functions

//To access data. Two ways
// object.property

name1.name
console.clear()
console.log(`First Name: ${name1.name}`)
console.log(`Second Name: ${name1.secondName}`)
console.log(`Age: ${name1.age}`)
console.log(`Gender: ${name1.sex}`)
console.log(`Interest 1: ${name1.Interests[0]}`)
console.log(`Interest 2: ${name1.Interests[1]}`)
console.log(`Interest 3: ${name1.Interests[2]}`)
console.log("\n")

// or using square brackets and quotes
//bracket notation
console.log(name1["name"])
console.log(name1["secondName"])
console.log(name1["age"])
console.log(name1["sex"])
console.log(name1["Interests"][0])
console.log(name1["Interests"][1])
console.log(name1["Interests"][2])

