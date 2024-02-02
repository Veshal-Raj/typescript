// Account class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    BankAccount.prototype.getAccountInfo = function () {
        console.log("Your Account number - ".concat(this.accountNumber, ", Your account balance ").concat(this.balance));
    };
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("deposited amount ".concat(amount, ", total balance ").concat(this.balance));
    };
    BankAccount.prototype.withdrawn = function (amount) {
        this.balance -= amount;
        console.log("amount withdrawn ".concat(amount, ", total balance ").concat(this.balance));
    };
    return BankAccount;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accountNumber, balance, interestRate) {
        var _this = _super.call(this, accountNumber, balance) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingAccount.prototype.calculateInterest = function () {
        var interest = this.balance * (this.interestRate / 100);
        console.log("Interest rate is ".concat(interest, " for amount ").concat(this.balance));
    };
    return SavingAccount;
}(BankAccount));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(accountNumber, balance, overdraftLimit) {
        var _this = _super.call(this, accountNumber, balance) || this;
        _this.overdraftLimit = overdraftLimit;
        return _this;
    }
    CurrentAccount.prototype.withdrawn = function (amount) {
        var availableBalance = this.balance + this.overdraftLimit;
        if (amount <= availableBalance) {
            this.balance - amount;
            console.log("Withdrawn ".concat(amount, " "));
        }
        else {
            console.log("Withdrawn exceeds available balance");
        }
    };
    return CurrentAccount;
}(BankAccount));
var A = new BankAccount('ADGDE', 1000);
A.getAccountInfo();
A.deposit(100);
A.getAccountInfo();
A.withdrawn(100);
A.getAccountInfo();
var B = new SavingAccount('DASSSD', 12000, 20);
B.calculateInterest();
B.deposit(6000);
B.getAccountInfo();
B.withdrawn(3000);
B.getAccountInfo();
var C = new CurrentAccount('KHLHH', 300000, 45);
C.getAccountInfo();
C.withdrawn(40000);
C.getAccountInfo();
