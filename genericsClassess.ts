function anotherFn<T,U extends number>(valOne: T, valTwo: U):object{
    return {
        valOne,
        valTwo
    }
}

anotherFn('2',3)


interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFnc<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFnc(3, {})

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}


class Sellable<T> {
    public cart: T[] = []

    addToCart(products: T) {
        this.cart.push(products)
    }
}