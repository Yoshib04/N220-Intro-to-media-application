const applePrice = 0.49;
let pickedApples = 4;
pickedApples += 10;
pickedApples -= 10;

const totalApple = applePrice * pickedApples;

console.log("Cost of Apples", totalApple);

console.log("Too many apples", pickedApples > 5);

pickedApples -= 6;

console.log("Too many apples", pickedApples > 5);

let remHome = false;

console.log("Good to go home", pickedApples > 5 && remHome)

let haveMap = true;

console.log("Good to go home", remHome || haveMap);

console.log("Total for apples", typeof totalApple);

console.log("String of 5", String(5), 5);



let myAddress = "413";
myAddress += "Peach" + "St";

console.log(myAddress);

console.log("Street name has st:", myAddress.toLowerCase().includes("st"));

console.log("My address", myAddress.repeat("St","Street"));

console.log("ty".length);

let myAge = "76";

myAge = Number(myAge);

myAge += 0.5;

console.log(myAge.toFixed(2));

console.log("Next Birthday", Math.ceil(myAge));

console.log("My favorite number:", Math.round(Math.random() * 100));



//readme.md file link type context [Home] 