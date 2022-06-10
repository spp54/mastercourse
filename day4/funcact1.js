const factorial = (n) => {
    if ((n == 0) || (n == 1)) { return 1
}
else {
    return ( n * factorial (n - 1))
    }
}
console.log (factorial(10))

// logic. The factorial of say 3 is 3 x 2 x 1 = 6
// but the factorial of 0 and 1 is always 1 (do not ask me why)
//So the IF statement filters for that fact and returns 1 if the given number is zero or 1
// The ELSE statement does the factorial calculation which is the given number X itself minus 1


