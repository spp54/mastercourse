let pin = (1234)
let balance = (400)
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

