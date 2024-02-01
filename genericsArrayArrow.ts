interface Bootle {
    brand: string,
    type: number
}

function getSearchProducts<T>(products: T[]):T{
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

// arrow functions

const getMoreSearchProucts = <T>(products: T[]): T=> {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}