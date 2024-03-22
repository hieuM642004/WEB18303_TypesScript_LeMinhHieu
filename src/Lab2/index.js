var Caculator = /** @class */ (function () {
    function Caculator(number1, number2, phrase, permit) {
        this.number1 = number1;
        this.number2 = number2;
        this.phrase = phrase;
        this.permit = permit;
    }
    Caculator.prototype.calculateResult = function () {
        var result = this.number1 + this.number2;
        if (this.permit) {
            console.log(this.phrase + result);
            ;
        }
        else {
            console.log('Not show result');
        }
    };
    return Caculator;
}());
var myCaculator = new Caculator(5, 3.6, 'Result is:', true);
myCaculator.calculateResult();
//Bài 2
var Adder = /** @class */ (function () {
    function Adder() {
    }
    Adder.prototype.add = function (x) {
        if (x === void 0) { x = 5; }
        var phrase = 0;
        phrase = 10;
        x = 2.3;
        return phrase + x;
    };
    return Adder;
}());
var myAdder = new Adder();
var result2 = myAdder.add();
console.log(result2);
var person = {
    name: 'Typescript',
    age: 20,
};
console.log(person.name);
//Bài 4
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person1 = {
    name: 'Typescript',
    age: 10,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
    roleuple: [2, 'author'],
};
var favouriteActives;
favouriteActives = [5, 'Sports', true];
if (person1.role === Role.AUTHOR) {
    console.log('Is author');
}
person1.roleuple.push('admin');
person1.roleuple[1] = "10";
person1.roleuple = [0, 'admin'];
var comnine = function (input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
var combineNumber = comnine(30, 26, 'as-number');
console.log(combineNumber);
var combineStringNumber = comnine('30', '26', 'as-number');
console.log(combineStringNumber);
var combineText = comnine('Typescript Vs', 'JavaScript', 'as-text');
console.log(combineText);
var a = { value: null };
console.log(a.value);
console.log(typeof (a === null || a === void 0 ? void 0 : a.value));
var b = { value: null };
console.log(b === null || b === void 0 ? void 0 : b.value);
console.log(typeof (b === null || b === void 0 ? void 0 : b.value));
var UserData = /** @class */ (function () {
    function UserData() {
    }
    UserData.prototype.checkAndAssign = function () {
        this.userInput = 5;
        this.userInput = 'Typescript';
        this.userName = this.userInput;
        if (typeof this.userInput === 'string') {
            this.userName = this.userInput;
        }
    };
    return UserData;
}());
var userData = new UserData();
userData.checkAndAssign();
console.log(userData.userName);
