const score: Array<number> = []
const names: Array<String> = []



function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo<Type>(val: Type): Type {
    return val
}

identityTwo('hello')
//  this generics will lock the type as the value that we gave in the initial 


function identityThree<T>(val: T): T {
    return val
}

identityThree(0)

//=====================================================//

interface Bootle {
    brand: string,
    type: number
}

identityThree<Bootle>({})