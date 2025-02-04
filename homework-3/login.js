const password = "(d0nteatTheScript)"; //We use const here as the password is constant
const startSpace = " "; //We use const here as the password starts with a space
const eightChar = 8; //We use const here as the password should be at least 8 characters long
const eatWord = "eat"; //We use const here as the password should contain the word

console.log(password.startsWith(startSpace));
console.log(password.length >= eightChar);
console.log(password.includes(eatWord));