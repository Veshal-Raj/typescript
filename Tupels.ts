// order of data type also matters

let tUser: [string, number, boolean]

tUser = ['hello', 44, true]

type abcd = [number, string]

let cd: abcd = [3, 'hello']

interface x {
    // axhd: ()=> string
    axhd():string

}

const veshal: x = {
    axhd: ()=> 'hello'
}