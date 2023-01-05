// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Markus',
//   age: 29,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

// person.role[2] = 'Test';
// console.log(person);

enum Role {
  'ADMIN',
  'READ_ONLY',
  'AUTHOR',
}

const person = {
  name: 'Markus',
  age: 29,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

let activities: string[];
activities = ['Sports'];

console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); // ERROR
}
