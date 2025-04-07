export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 100,
}
const tablet: Product = {
    description: 'iPad Air',
    price: 200,
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function calculateTax(options: TaxCalculationOptions): number[] {
    const { tax, products } = options;
    let total = 0;
    products.forEach(product => {
        const { price } = product;
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart: Product[] = [phone, tablet];
const tax = 0.15;

const result = calculateTax({ tax, products: shoppingCart });
const [total, taxAmount] = result;
console.log('Total: ', total);
console.log('Tax: ', taxAmount);
console.log('Total + Tax: ', total + taxAmount);
console.log(result);