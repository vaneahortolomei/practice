const a = (1/23).toString(2);
const b = (1/4).toString(4);
const c = (1/67).toString(3);

//binary system
const result = document.querySelector('#result');
result.innerText = `${a} --- ${b} --- ${c}`;


//bigInt
console.log(BigInt(2));


//regular expression

const input = 'test@gmail.com';

const checkEmail = email => {
  const checker = /^\S+@\S+\.\S+$/; // email checker
  return checker.test(email) ? console.log('Okay email') : console.log('Wrong email')
};

checkEmail(input);

//check includes word

const regs = /hello/
const regs2 = /([hH])ello/
const regs3 = /.ello/

console.log(regs.test('hello'));
console.log(regs2.test('Hello'));
console.log(regs3.test('fello'));

