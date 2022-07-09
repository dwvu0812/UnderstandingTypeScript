interface Person {
    name: string;
    age: number;
    greeet(phrase: string): void;
}

let user: Person;

user = {
    name: 'Max',
    age: 30,
    greeet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}