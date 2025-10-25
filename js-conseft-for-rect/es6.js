const numbers = [2, 4, 5, 6, 7, 8,9];
const student = {
    name: 'Nobodip',
    age: 32,
    id : 1502176618,
    subject: ['English', 'physics', 'biology']
}
// template string
const about = `My name id ${student.name} age if${student.age} has number ${numbers[2]} also like ${student.subject[0]}`;
console.log(about);

// arrow function

const getFive = () =>{
    return 5;
}

const addNumber = (number) => number + 65;
const isEven = x => x % 2 === 0;

const addThreeNumber = (num1, num2, num3) => num1 + num2 + num3;

const doMath = (num1, num2) => {
    const add = num1 + num2;
    return  add;
}

// spread operator

const newNumbers = [...numbers];
numbers.push(99);
numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(newNumbers);
console.log(numbers);

// create a new array from an older array and add an element 

const currentNumber = [...numbers, 55];
console.log(currentNumber);
