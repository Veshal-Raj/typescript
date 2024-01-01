function addTwo(num: number){
    return num+ 2;
}

addTwo(33)

function getUpper(val: string) {
    return val.toUpperCase()
}

getUpper("veshal")


function signUpUser(name: string, email: string, isPaid: boolean){

}

signUpUser("veshal", "veshal@mail.com", true)

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
loginUser("veshal", "veshal@mail.com")


function addThree(num: number): number{ // giving types to the functions
    return num+ 3;
    // return true
}

addThree(33)


// function getValue(myVal: number){
//     if (myVal > 5) return true;
//     return "200 OK"
// }

const getHello = (s: string) : string =>{
    return "" // we need to return something, otherwise typescript wil throw error
}

const Heros = ["thor", "spiderman", "ironman"]

Heros.map((hero): string =>{ 
    return `hero is ${hero}`
})

// void means its is returning nothing
function consoleError(errmsg: string): void {
    console.log(errmsg) 
    // return "something" // this will show error
}

// never --> some functions never return a value;
// for HandlingError use "never"
function handleError(errmsg: string): never{
    throw new Error(errmsg)
}
