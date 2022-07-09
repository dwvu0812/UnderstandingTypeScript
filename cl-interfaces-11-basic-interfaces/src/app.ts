// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//   name: 'Max',
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   }
// };

// user1.greet('Hi there - I am');

// interface AddFn {
//   (a: number, b: number): number;
// }

// let add: AddFn = (n1: number, n2: number) => {
//   return n1 + n2;
// }

// const userInput = document.getElementById('input')! as HTMLInputElement;
// userInput.value = 'Max';

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: 'Not a valid email',
//   username: 'Must start with a character'
// }

// const names: Array<string> = [];

// gerneric: a type connects to a specific type of data

// interface Lengthy {
//   length: number;
// }

// function countAndDescribe<T extends Lengthy> (paras: T) {
//   let description = 'Got no value';
//   if (paras.length === 1) {
//     description = 'Got 1 value';
//   } else if (paras.length > 1) {
//     description = 'Got ' + paras.length + ' elements'
//   }
//   return [paras, description];
// }

// let result = countAndDescribe(['Lan', 'Du']);
// console.log(result)

// keyof: extract all object keys

// function extractAndConvert<T extends object, U extends keyof T> (obj: T, key: U) {
//   return obj[key]
// }

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item)
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }
  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Hi');