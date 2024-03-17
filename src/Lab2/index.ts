//Bài 1
let number1: number = 5;
let number2: number = 2.8;
let phrase: string = 'Result is';
let permit: boolean = true;

const result1 = number1 + number2;
if (permit) {
    console.log(phrase + result1);
} else {
    console.log('Not show result');
}
//Bài 2
function add(x: number = 5) {
    let phrase: number = 0;
    phrase = 10;
    x = 2.8;
    return phrase + x;
}

let result2: number = add();
console.log(result2); // Kết quả: 12.8
//Bài 3
let person: {
    name: string;
    age: number;
};

person = {
    name: 'Typescript',
    age: 11,
};

console.log(person.name);
//Bài 4

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}
const person1: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
    roleuple: [number, string];
} = {
    name: 'Typescript',
    age: 11,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
    roleuple: [2, 'author'],
};

let favouriteActivites: any[];
favouriteActivites = [5, 'Sports', true];

if (person1.role == Role.AUTHOR) {
    console.log('is author');
}
person1.roleuple.push('admin'); 
person1.roleuple[1] = "10"; 
person1.roleuple = [0, 'admin']; 

type Combinable = number | string;
function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: 'as-number' | 'as-text',
) {
    let result;
    if (
        (typeof input1 === 'number' && typeof input2 == 'number') ||
        resultConversion === 'as-number'
    ) {
        result = +input1 + +input2; // Sử dụng '+' thay vì 'parseFloat' để chuyển đổi thành số
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineNumber = combine(30, 26, 'as-number');
console.log(combineNumber); // Kết quả: 56
const combineStringNumber = combine('30', '26', 'as-number');
console.log(combineStringNumber); // Kết quả: 56
const combineText = combine('Typescript Vs', 'Javascript', 'as-text');
console.log(combineText); // Kết quả: 'Typescript VsJavascript'

var a = null;
console.log(a); // Kết quả: null
console.log(typeof a); // Kết quả: 'object'

var b;
console.log(b); // Kết quả: undefined
console.log(typeof b); // Kết quả: 'undefined'

let userInput: unknown;
let userName: string;
userInput = 5;
userInput = 'Typescript';
userName = userInput as string; // Sử dụng 'as string' để ép kiểu
if (typeof userInput === 'string') {
    userName = userInput;
}
