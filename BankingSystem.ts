// Account class

class BankAccount {
    protected balance: number;
    private accountNumber: string;

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    getAccountInfo() {
        console.log(`Your Account number - ${this.accountNumber}, Your account balance ${this.balance}`)
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`deposited amount ${amount}, total balance ${this.balance}`)
    }

    withdrawn(amount: number): void {
        this.balance -= amount;
        console.log(`amount withdrawn ${amount}, total balance ${this.balance}`)
    }
}

class SavingAccount extends BankAccount {
    private interestRate: number;
    constructor(accountNumber: string, balance: number, interestRate: number){
        super(accountNumber, balance)
        this.interestRate = interestRate
    }

    calculateInterest(): void {
        const interest = this.balance * (this.interestRate/100)
        console.log(`Interest rate is ${interest} for amount ${this.balance}`)
    }
}

class CurrentAccount extends BankAccount {
    private overdraftLimit: number;
    constructor(accountNumber: string, balance: number, overdraftLimit: number){
        super(accountNumber, balance)
        this.overdraftLimit = overdraftLimit
    }

    withdrawn(amount: number): void {
        const availableBalance = this.balance + this.overdraftLimit
        if (amount <= availableBalance) {
            this.balance - amount;
            console.log(`Withdrawn ${amount} `)
        } else {
            console.log(`Withdrawn exceeds available balance`)
        }
    }
}


let A = new BankAccount('ADGDE', 1000)

A.getAccountInfo()
A.deposit(100)
A.getAccountInfo()
A.withdrawn(100)
A.getAccountInfo()


let B = new SavingAccount('DASSSD', 12000, 20)

B.calculateInterest()
B.deposit(6000)
B.getAccountInfo()
B.withdrawn(3000)
B.getAccountInfo()


let C = new CurrentAccount('KHLHH', 300000, 45)

C.getAccountInfo()
C.withdrawn(40000)
C.getAccountInfo()