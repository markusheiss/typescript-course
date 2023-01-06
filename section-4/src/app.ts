const userName = 'Markus';
// userName = 'Max';

let age = 29;
age = 30;

function add(a: number, b: number = 5) {
  let result;
  result = a + b;
  return result;
}

console.log(add(4));

if (age > 20) {
  var isOld = true;
}

// console.log(isOld);
