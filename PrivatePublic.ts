class Users {
    email: string
    name: string
   private readonly city: string = "Jaipur"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

const hi = new Users("h@h.com", "hitesh")

// if we gave private, we cannot get access it outside the class

class bestWay {
   private readonly city: string = 'delhi'
   constructor (public email: string, public  name: string){}
}

// protected class
class Protec {
    protected  email:  string = 'protected@mail.com'
    constructor(public name: string, public age: number) {}
}

class childProtec extends Protec {
    changeEmail() {
        this.email = 'childProtected@mail.com'
    }
}