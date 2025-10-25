// 1. json => stringify, parse
const student = {
    name: 'Nobodip',
    age: 32,
    id : 1502176618,
    subject: ['English', 'physics', 'biology']
}
const studentJSON = JSON.stringify(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

//2. fetch

fetch('url')
.then(res => res.json())
.then(data => console.log(data))

// keys, values

const keys = Object.keys(student);
const values = Object.values(student);

// for 

const numbers = [23, 43, 51, 77, 76];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object  for in on object 

// add on remove from on array

const products = [
    {name: 'laptop', price: 32000, brand : 'lenovo', color: 'black'},
    {name: 'phone', price: 3000, brand : 'apple', color: 'Golden'},
    {name: 'watch', price: 7000, brand : 'casio', color: 'yellow'},
    {name: 'sunGlass', price: 8000, brand : 'rebon', color: 'silver'},
    {name: 'camera', price: 9000, brand : 'canon', color: 'gray'}
];

const newProduct = {name: 'webcam', price: 700, brand : 'Red'}

// copy product array and then add newProduct 

const newProducts = [...products, newProduct];

// create a new array with out on apecific item

// remove phone means create a new array with out the phone

const remaining = products.filter(product => product.name !== 'phone');




