var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Bài 1
//1.1
var sum1 = function () {
    return 5 + 5;
};
console.log(sum1());
function sumF() {
    return 5 + 5;
}
console.log(sum1());
console.log(sumF());
//1.2
var sum2 = function (a, b) {
    if (b === void 0) { b = 3; }
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var total = a + b;
    if (rest.length > 0) {
        total += rest.reduce(function (acc, cur) { return acc + cur; });
    }
    return total;
};
console.log(sum2.apply(void 0, __spreadArray([5, 5], [1, 2, 3], false)));
//1.3
var hobbies = ['Sports', 'Cooking'];
var activehobbies = ['Hiking'];
// activehobbies.push(hobbies); //Argument of type 'string[]' is not assignable to parameter of type 'string'.
activehobbies.push(hobbies[0], hobbies[1]);
activehobbies.push.apply(activehobbies, hobbies);
console.log(activehobbies);
var CaculatorSum = /** @class */ (function () {
    function CaculatorSum() {
    }
    CaculatorSum.prototype.sum = function (x, y) {
        if (y === void 0) { y = 0; }
        return x + y;
    };
    return CaculatorSum;
}());
var calc = new CaculatorSum();
console.log(calc.sum(5, 5));
var MyError = /** @class */ (function () {
    function MyError() {
    }
    MyError.prototype.throwError = function (errorMsg) {
        throw new Error(errorMsg);
    };
    return MyError;
}());
var myErr = new MyError();
myErr.throwError('A error occurred!!!');
var CaculatorHandler = /** @class */ (function () {
    function CaculatorHandler() {
    }
    CaculatorHandler.prototype.handleCaculator = function (result) {
        console.log(result);
    };
    return CaculatorHandler;
}());
var AddandHandle = function (x, y, cd) {
    var result = x + y;
    cd.handleCaculator(result);
};
var calcHandler = new CaculatorHandler();
AddandHandle(10, 20, calcHandler);
//Bài cho thêm---------------------------
// Arrow function
var multiplication = function (a, b) {
    return a * b;
};
console.log(multiplication(5, 2));
// Cú pháp: Arrow function có cú pháp ngắn gọn hơn so với hàm thông thường.
// Binding của this: Trong arrow function, this được binding theo lexical scope,còn hàm thông thường this phụ thuộc vào cách hàm được gọi.
// arguments: Arrow function không có đối tượng arguments, trong khi hàm thông thường có.
// new: Arrow function không thể được sử dụng với new, nó không có [[Construct]] và sẽ throw một lỗi nếu cố gắng gọi nó với new.
//Function return
var sum = function (a, b) {
    return a + b;
};
console.log(sum(5, 5));
var reverseString = function (stri) {
    return stri.split('').reverse().join(' ');
};
console.log(reverseString('Hello'));
var addTwoNumber = function (a, b) {
    return a + b;
};
//Function with parameters
var sumArray = function (arr) {
    return arr.reduce(function (acc, cur) { return acc + cur; });
};
console.log(sumArray([1, 2, 3, 4, 5]));
var calculateSum = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, cur) { return acc + cur; });
};
console.log(calculateSum(4, 6, 8));
console.log(calculateSum(4, 6, 8, 9, 7, 3, 5));
//Default parameter
var squareNumber = function (a) {
    if (a === void 0) { a = 7; }
    return a * a;
};
console.log(squareNumber());
var sumTwoNumber = function (a, b) {
    if (b === void 0) { b = 2; }
    return a + b;
};
console.log(sumTwoNumber(2));
//Optional parameter
var getValueOrDefault = function (value, defaultValue) {
    if (defaultValue === void 0) { defaultValue = 'Default'; }
    return value !== undefined ? value : defaultValue;
};
console.log(getValueOrDefault('HII'));
console.log(getValueOrDefault());
//Spread operators
var sumArr = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (acc, cur) { return acc + cur; });
};
var arrNumber = [1, 2, 3];
console.log(sumArr.apply(void 0, arrNumber));
//Rest parameter
var sumRest = function () {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr.reduce(function (acc, cur) { return acc + cur; });
};
console.log(sumRest(1, 2, 3, 4, 5));
console.log(sumRest(5, 10, 15, 20));
//Function & void
var voidFuncion1 = function () {
    console.log('Thông báo');
};
console.log(voidFuncion1());
var neverFuncion1 = function () { };
console.log(neverFuncion1());
//Never & void
//Void
// Kiểu void thường được sử dụng để chỉ ra rằng một hàm không trả về bất kỳ giá trị nào.
// Hàm vẫn có thể thực hiện các công việc nội tại của nó, nhưng không trả về bất kỳ giá trị nào.
// Một biến có kiểu void có thể chứa giá trị undefined hoặc null.
//Never
//Kiểu never là loại dữ liệu của các biến không bao giờ có giá trị.
// Nó  sử dụng trong các trường hợp mà hàm không bao giờ kết thúc hoặc ném ra một exception.
// Nếu một hàm có kiểu trả về never, nó không thể trả về bất kỳ giá trị nào, kể cả undefined hoặc null.
var voidFuncion = function () { };
var resultVoid = voidFuncion();
var neverFuncion = function () {
    throw new Error('Luôn ném ra một exception.');
};
var resultNever = neverFuncion();
