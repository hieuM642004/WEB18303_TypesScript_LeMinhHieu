//Bài 1
//1.1
const sum1 = () => {
    return 5 + 5;
};
console.log(sum1());
function sumF() {
    return 5 + 5;
}
console.log(sum1());
console.log(sumF());
//1.2
const sum2 = (a: number, b: number = 3, ...rest: number[]) => {
    let total = a + b;
    if (rest.length > 0) {
        total += rest.reduce((acc, cur) => acc + cur);
    }
    return total;
};
console.log(sum2(5, 5, ...[1, 2, 3]));
//1.3
const hobbies: string[] = ['Sports', 'Cooking'];
const activehobbies: string[] = ['Hiking'];
// activehobbies.push(hobbies); //Argument of type 'string[]' is not assignable to parameter of type 'string'.
activehobbies.push(hobbies[0], hobbies[1]);
activehobbies.push(...hobbies);
console.log(activehobbies);
//Bài 2
//2.1
interface Caculator3 {
    sum(x: number, y: number): number;
}
class CaculatorSum implements Caculator3 {
    sum(x: number, y: number = 0): number {
        return x + y;
    }
}
const calc = new CaculatorSum();
console.log(calc.sum(5, 5));

//2.2
interface ErrorThrower {
    throwError(errorMsg: string): never;
}
class MyError implements ErrorThrower {
    throwError(errorMsg: string): never {
        throw new Error(errorMsg);
    }
}
const myErr = new MyError();
myErr.throwError('A error occurred!!!');
//3.3
interface CaculatorHandle {
    handleCaculator(result: number): void;
}
class CaculatorHandler implements CaculatorHandle {
    handleCaculator(result: number): void {
        console.log(result);
    }
}
const AddandHandle = (x: number, y: number, cd: CaculatorHandle) => {
    const result = x + y;
    cd.handleCaculator(result);
};
const calcHandler = new CaculatorHandler();
AddandHandle(10, 20, calcHandler);

//Bài cho thêm---------------------------

// Arrow function
const multiplication = (a: number, b: number) => {
    return a * b;
};
console.log(multiplication(5, 2));
// Cú pháp: Arrow function có cú pháp ngắn gọn hơn so với hàm thông thường.
// Binding của this: Trong arrow function, this được binding theo lexical scope,còn hàm thông thường this phụ thuộc vào cách hàm được gọi.
// arguments: Arrow function không có đối tượng arguments, trong khi hàm thông thường có.
// new: Arrow function không thể được sử dụng với new, nó không có [[Construct]] và sẽ throw một lỗi nếu cố gắng gọi nó với new.

//Function return
const sum = (a: number, b: number) => {
    return a + b;
};
console.log(sum(5, 5));

const reverseString = (stri: string) => {
    return stri.split('').reverse().join(' ');
};
console.log(reverseString('Hello'));

//Function as types
type TwoNumber = (a: number, b: number) => number;
const addTwoNumber: TwoNumber = (a, b) => {
    return a + b;
};

//Function with parameters
const sumArray = (arr: number[]) => {
    return arr.reduce((acc, cur) => acc + cur);
};
console.log(sumArray([1, 2, 3, 4, 5]));

const calculateSum = (...numbers: number[]): number => {
    return numbers.reduce((acc, cur) => acc + cur);
};
console.log(calculateSum(4, 6, 8));
console.log(calculateSum(4, 6, 8, 9, 7, 3, 5));

//Default parameter
const squareNumber = (a: number = 7): number => {
    return a * a;
};
console.log(squareNumber());
const sumTwoNumber = (a: number, b: number = 2) => {
    return a + b;
};
console.log(sumTwoNumber(2));

//Optional parameter
const getValueOrDefault = (value?: any, defaultValue: any = 'Default'): any => {
    return value !== undefined ? value : defaultValue;
};
console.log(getValueOrDefault('HII'));
console.log(getValueOrDefault());

//Spread operators
const sumArr = (...arr: number[]): number => {
    return arr.reduce((acc, cur) => acc + cur);
};
const arrNumber: number[] = [1, 2, 3];
console.log(sumArr(...arrNumber));

//Rest parameter
const sumRest = (...arr: number[]): number => {
    return arr.reduce((acc, cur) => acc + cur);
};
console.log(sumRest(1, 2, 3, 4, 5));
console.log(sumRest(5, 10, 15, 20));

//Function & void
const voidFuncion1 = (): void => {
    console.log('Thông báo');
};
console.log(voidFuncion1());

const neverFuncion1 = (): void => {};
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

const voidFuncion = (): void => {};
const resultVoid: void = voidFuncion();
const neverFuncion = (): never => {
    throw new Error('Luôn ném ra một exception.');
};
const resultNever: never = neverFuncion();
