const pet = {
    name: "Yuck Fou",
    typeOfPet: "Cat",
    age: 2,
    colour: "black",
    EatDrink() {
        console.log(`Hello my name is ${this.name} and I eat food and drink liquids`)
    }
}
pet.EatDrink()