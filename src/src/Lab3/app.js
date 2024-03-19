"use strict";
//Bài 1
//1.1
// const sum=()=>{
//     return 5+5
// };
// console.log(sum());
//1.2
// const sum=(a:number,b:number=3,...rest:number[])=>{
// let total= a+b
// if(rest.length>0){
//     total+=rest.reduce((acc,cur)=>acc+cur)
// }
// return total
// }
// console.log(
//     sum(5,5,...[1,2,3])
// );
//1.3
// const hobbies=['Sports','Cooking'];
// const activehobbies=['Hiking']
// activehobbies.push(hobbies);
// activehobbies.push(hobbies[0],hobbies[1]);
// activehobbies.push(...hobbies)
// console.log(activehobbies);
//Bài 2
//2.1
// let sum = (x: number, y?: number) => {
//     return x + <number>y;
// };
// let speech = (output: any): void => {
//     console.log('Result' + output);
// };
// speech(sum(5, 12));
// console.log(speech(sum(8, 5)));
// //2.2
// let something: void = undefined;
// let nothing: never = null;
// function throwError(erorrMsg: string): never {
//     throw new Error(erorrMsg);
// }
// //3.3
// function AddandHandle(x: number, y: number, cd: (num: number) => void) {
//     const result = x + y;
//     cd(result);
// }
// AddandHandle(10, 20, (result) => {
//     console.log(result);
// });
class Department {
    constructor(n) {
        this.name = n;
    }
    desdcribe() {
        console.log('Department', +this.name);
    }
}
const programing = new Department('programing');
const education = new Department('education');
const student = new Department('student');
console.log(programing);
