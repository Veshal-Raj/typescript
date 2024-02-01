var newUser = /** @class */ (function () {
    function newUser(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    Object.defineProperty(newUser.prototype, "take", {
        get: function () {
            console.log('take ', "".concat(this._courseCount));
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(newUser.prototype, "getAppleEmail", {
        get: function () {
            return "apple ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(newUser.prototype, "courserCount", {
        get: function () {
            return this._courseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(newUser.prototype, "courseCount", {
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("course count should be more than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return newUser;
}());
// using getter you can get access to private as well as public values
// but we are mainly using to get access to the private values
// and setter should not have any type
