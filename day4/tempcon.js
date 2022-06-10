const multiplBy5Overnine = (fahren) =>{
    return fahren - 32
}

const getCel = (fahren) =>{
    return multiplBy5Overnine (fahren) *5 / 9
}

console.log ("The temp is " + getCel (59) + (" Degrees"))