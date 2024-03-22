//Bài 1
interface CaculationResult {
    number1: number;
    number2: number;
    phrase: string;
    permit: boolean;
    calculateResult(): void;
}
class Caculator implements CaculationResult {
    constructor(
        public number1: number,
        public number2: number,
        public phrase: string,
        public permit: boolean,
    ) {}

    calculateResult(): void {
        const result = this.number1 + this.number2;
        if (this.permit) {
            console.log(this.phrase + result);
        } else {
            console.log('Not show result');
        }
    }
}

const myCaculator = new Caculator(5, 3.6, 'Result is:', true);
myCaculator.calculateResult();
//Bài 2
class Adder {
    add(x: number = 5): number {
        let phrase: number = 0;
        phrase = 10;
        x = 2.3;
        return phrase + x;
    }
}
const myAdder = new Adder();
const result2: number = myAdder.add();
console.log(result2);

//Bài 3
interface PersonUnique {
    name: string;
    age: number;
}
const person: PersonUnique = {
    name: 'Typescript',
    age: 20,
};
console.log(person.name);

//Bài 4
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

interface Person1 {
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
    roleuple: [number, string];
}
const person1: Person1 = {
    name: 'Typescript',
    age: 10,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
    roleuple: [2, 'author'],
};
let favouriteActives: any[];
favouriteActives = [5, 'Sports', true];
if (person1.role === Role.AUTHOR) {
    console.log('Is author');
}
person1.roleuple.push('admin');
person1.roleuple[1] = '10';
person1.roleuple = [0, 'admin'];
type Combinable = number | string;
interface CombineFuncion {
    (
        input1: Combinable,
        input2: Combinable,
        resultConversion: 'as-number' | 'as-text',
    ): Combinable;
}
const comnine: CombineFuncion = (input1, input2, resultConversion) => {
    let result;
    if (
        (typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number'
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
};
const combineNumber = comnine(30, 26, 'as-number');
console.log(combineNumber);
const combineStringNumber = comnine('30', '26', 'as-number');
console.log(combineStringNumber);
const combineText = comnine('Typescript Vs', 'JavaScript', 'as-text');
console.log(combineText);

interface NullableValue {
    value: any;
}
let a: NullableValue = { value: null };
console.log(a.value);
console.log(typeof a?.value);
let b: NullableValue = { value: null };
console.log(b?.value);
console.log(typeof b?.value);

interface UserInput {
    userInput: unknown;
    userName: unknown;
    checkAndAssign(): void;
}
class UserData implements UserInput {
    userInput: unknown;
    userName: unknown;
    checkAndAssign(): void {
        this.userInput = 5;
        this.userInput = 'Typescript';
        this.userName = this.userInput as string;
        if (typeof this.userInput === 'string') {
            this.userName = this.userInput;
        }
    }
}

const userData = new UserData();
userData.checkAndAssign();
console.log(userData.userName);
