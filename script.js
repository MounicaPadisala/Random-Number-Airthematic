const x = Math.floor((Math.random() * 100) + 1);
const y = Math.floor((Math.random() * 50) + 1);
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;
const product = x * y;
const productOutput = `${x} * ${y} = ${product}`;
const reminder = x % y;
const reminderOutput = `${x} % ${y} = ${reminder}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(quotientOutput);
console.log(productOutput);
console.log(reminderOutput);