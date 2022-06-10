let num = (223322)

let r = num.toString().split('').reverse().join('');

if (num == r){
    console.log (`${num} is a palindrome`)
}
else {
    console.log(`${num} is NOT a palindrome`)
}
