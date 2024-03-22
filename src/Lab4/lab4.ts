//Bài 1
{
    interface AddFn {
        (a: number, b: number): number;
    }
    let add: AddFn;
    add = (n1: number, n2: number) => {
        return n1 + n2;
    };
}

//Bài 2
interface Named {
    readonly name?: string;
    outputName?: string;
}
interface Greetable extends Named {
    greet(phrase: string): void;
}
class Person implements Greetable {
    constructor(public readonly name?: string | undefined) {
        this.name = name;
    }
    greet(phrase: string): void {
        if (this.name) {
            console.log(`${phrase}, ${this.name}`);
        } else {
            console.log(`${phrase}`);
        }
    }
}
let user1: Greetable = new Person('Hieu');
user1.greet('Hello world');
console.log(user1);

//Bài 3
abstract class Department {
    static fiscalYear = 2024;
    protected employees: string[] = [];
    constructor(protected readonly id: string, public name: string) {}
    static createEmployee(name: string) {
        return { name: name };
    }
    abstract describe(this: Department): void;
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

interface Admin{
    admins: string[];
}

class ITDepartment extends Department implements Admin{
   
    constructor(id: string,public admins: string[]) {
        super(id, 'IT');
    }
    describe() {
        console.log('IT Department - ID' + this.id);
    }
}
const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');

//Bài 4
//Xem ở thư mục Lab 2 và Lab3