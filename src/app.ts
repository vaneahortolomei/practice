//types
//number
//input as HTMLInputElement

const inputOne = document.getElementById('text') as HTMLInputElement;
const inputTwo = document.getElementById('text2') as HTMLInputElement;
const btn = document.querySelector('.btn');

function calc(a: number, b: number) {  //number
    return a + b;
}


type PrintMode = 'console' | 'alert'; //Literal types

enum OutputMode { CONSOLE, ALERT} //enum type


function printCalc(result: string | number, printMode: OutputMode){
    if(printMode === OutputMode.CONSOLE){
        console.log(result);
    }else if(printMode === OutputMode.ALERT){
        alert(result);
    }
}

type Calculate = {res: number, print: () => void }[];

const results: Calculate = [];

btn.addEventListener('click', () => {
    const num1 = +inputOne.value;
    const num2 = +inputTwo.value;
    const result = calc(num1, num2);
    const resultContainer = {
      res: result,
      print() {
          console.log(this.res);
      },
    };
    results.push(resultContainer);
    // results[0].print();
    printCalc(result, OutputMode.CONSOLE);
    printCalc(result, OutputMode.ALERT);
});

//Object Types, Array Types & Function Types
//Literal Types, Union Types, Enums


class User {
    name: string;
    private age: number;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


}

const user = new User('max', 30);
console.log(user.name);




interface UserRepo {

}





















