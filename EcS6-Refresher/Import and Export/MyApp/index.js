import array, { str, a, hello, obj as xyz, Person } from './component.js';
import App from './other.js';
console.log(str);

hello();

console.log(xyz);
console.log(array);


let person = new Person

console.log(person);

let newApp = new App("hello", "red");
console.log(newApp);



// import * as all from './component.js';

// console.log(all)
// all.hello()