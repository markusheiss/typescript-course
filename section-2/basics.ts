function add(n1: number, n2: number, printResult: boolean, phrase: string) {
  const res = n1 + n2;
  if (printResult) {
    console.log(phrase + res);
  } else return res;
}

// const num1 = '5';
const num1 = 5;
const num2 = 2.8;
const showResult = true;
let resultPhrase = 'Result is: ';

const result = add(num1, num2, showResult, resultPhrase);

console.log(result);
