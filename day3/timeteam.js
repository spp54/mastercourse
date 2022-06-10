let placeOfWork = ("office")
let time = (17)
let travelling = ("Commuting")
let home =("At Home")

if (time <= 7)
{
    console.log(home)
}
else if (time == 8){
    console.log(`${travelling}`)
}
else if (time == 9 || time == 10 || time == 11 || time == 12 || time == 13 || time == 14 || time == 15){
    console.log(placeOfWork)
}
else if (time == 16){
    console.log(travelling)
}
else if (time >= 17){
    console.log(home)
}