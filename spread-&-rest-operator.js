//Spreed Operator( split) in array 
let number = [1, 2, 3, 4, 5];
let number2 = [6, 7, 8, 9, 10];

let arr = [...number, ...number2, 11, 12, 13];
console.log(arr);

//Spreed operator in objects
let person = {
    name: "John",
    age: 30,
    address: "dhaka",
}

let person2 = {
    ...person,
    nationality: "Bangladeshi"
};

console.log(person2);


//reset operator( merge) in array
let something = (...numArr) => console.log(numArr);
something(1, 3, 5, 8);