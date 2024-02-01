class newUser {

    private _courseCount = 1

    readonly city: string = "Jaipur"
    constructor(
        public email: string,
        public name: string,
    ){}

    get take():boolean {
        console.log('take ', `${this._courseCount}`)
        return true
    }
    get getAppleEmail(): string{
        return `apple ${this.email}`
    }

    get courserCount(): number {
        return this._courseCount   
    }

    set courseCount(courseNum){
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

// using getter you can get access to private as well as public values
// but we are mainly using to get access to the private values
// and setter should not have any type