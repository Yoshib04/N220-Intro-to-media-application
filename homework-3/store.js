const itemPrice = 40.99; //We use const here as the price of the item is constant
const totalTax = 0.07; //We use const here as the tax rate is constant
const discount = 0.10; //We use const here as the discount rate is constant

console.log(itemPrice * (1 + totalTax));
console.log(itemPrice > 50);
console.log(itemPrice * (1 + totalTax) * (1 - discount));