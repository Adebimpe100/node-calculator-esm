import readline from 'readline';
import chalk from 'chalk';
import { add, subtract, multiply, divide } from './modules/operations.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
  rl.question('Enter second number: ', (num2) => {
    rl.question('Choose operation (add, subtract, multiply, divide): ', (op) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      switch (op.toLowerCase()) {
        case 'add':
          result = add(a, b);
          break;
        case 'subtract':
          result = subtract(a, b);
          break;
        case 'multiply':
          result = multiply(a, b);
          break;
        case 'divide':
          result = divide(a, b);
          break;
        default:
          result = 'Invalid operation';
      }

      console.log(chalk.green(`Result: ${result}`));
      rl.close();
    });
  });
});
