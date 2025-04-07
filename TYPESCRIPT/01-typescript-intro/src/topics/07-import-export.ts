import { Product, calculateTax } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    { description: 'Nokia A1', price: 100 },
    { description: 'iPad Air', price: 200 },
];

const [total, taxAmount] = calculateTax({ tax: 0.15, products: shoppingCart });
console.log('Total: ', total);
console.log('Tax: ', taxAmount);
console.log('Total + Tax: ', total + taxAmount);