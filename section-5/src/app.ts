interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;

interface IPerson {
  name: string;
  age: number;

  greet(phrase: string): void;
}

interface Named {
  readonly name: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: IPerson;

user1 = {
  name: 'Markus',
  age: 29,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user1.greet('Hello');

let user2 = new Person('Markus');
console.log(user2);
