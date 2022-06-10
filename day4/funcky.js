let coffeeIsGrinding = false


const pressGrindingBeans = () => {
    if (coffeeIsGrinding){
        console.log("Stopping the Grinding")
        coffeeIsGrinding = false
}
else
{
    console.log("Grinding is about to begin")
    coffeeIsGrinding =true
}

}
pressGrindingBeans()
pressGrindingBeans()
pressGrindingBeans()
