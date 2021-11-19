//types
//number
//input as HTMLInputElement
var inputOne = document.getElementById('text');
var inputTwo = document.getElementById('text2');
var btn = document.querySelector('.btn');
function calc(a, b) {
    return a + b;
}
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {})); //enum type
function printCalc(result, printMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    }
    else if (printMode === OutputMode.ALERT) {
        alert(result);
    }
}
var results = [];
btn.addEventListener('click', function () {
    var num1 = +inputOne.value;
    var num2 = +inputTwo.value;
    var result = calc(num1, num2);
    var resultContainer = {
        res: result,
        print: function () {
            console.log(this.res);
        }
    };
    results.push(resultContainer);
    // results[0].print();
    printCalc(result, OutputMode.CONSOLE);
    printCalc(result, OutputMode.ALERT);
});
//Object Types, Array Types & Function Types
//Literal Types, Union Types, Enums
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user = new User('max', 30);
console.log(user.name);
