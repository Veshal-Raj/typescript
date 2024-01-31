let score: number | string  = 33
score = 'hello 33'


type Abx = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let hitesh: Abx | Admin = {name: "hitesh", id: 334}

hitesh = {username: 'hc', id: 334}

const data: number[] = [1,3,4]
const data2: string[] = ['1','3','4']
const data3: (string | number)[] = ["1", '2',0]

// this is union, 