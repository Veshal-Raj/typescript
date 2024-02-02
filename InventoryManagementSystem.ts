// product class
class Product {
    protected name: string;
    protected price: number;
    protected quantity: number;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    updateQuantity(quantity: number): void {
        this.quantity += quantity;
        console.log(`Total quantity is ${this.quantity} of product ${this.name}`)
    }

    getProductInfo(): void{
        console.log(`Product name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`)
    }
}


class Electronic extends Product {
    private brand: string;

    constructor(name: string, price: number, quantity: number, brand: string){
        super(name, price, quantity)
        this.brand = brand;
    }

    getProductInfo(): void {
        console.log(`Product name: ${this.name}, Brand: ${this.brand}, Price: ${this.price}, Quantity: ${this.quantity}`)
    }
}


class Furniture extends Product {
    private brand: string;

    constructor(name: string, price: number, quantity: number, brand: string) {
        super(name, price, quantity)
        this.brand = brand;
    }

    getProductInfo(): void {
        console.log(`Product name: ${this.name}, Brand: ${this.brand}, Price: ${this.price}, Quantity: ${this.quantity}`)
    }
}

let Mobile = new Electronic('Realme XT', 30000, 10, 'Realme')

Mobile.getProductInfo()
Mobile.updateQuantity(20)
Mobile.getProductInfo()

let Chair = new Furniture('SandalWood Chair', 3000, 30, 'Chair')

Chair.getProductInfo()
Chair.updateQuantity(290)
Chair.getProductInfo()

