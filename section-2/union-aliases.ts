type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let res: number | string;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  )
    res = +input1 + +input2;
  else res = input1.toString() + input2.toString();
  return res;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedAgesString = combine('30', '26', 'as-number');
console.log(combinedAgesString);

const combinedNames = combine('Max', 'Anna', 'as-string');
console.log(combinedNames);
