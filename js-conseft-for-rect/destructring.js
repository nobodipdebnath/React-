const numbers  = [42, 65];
// array destructuring

// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];
const [x, y] = numbers;

function getValues (num1, num2){
    const nums = [num1, num2];
    return nums;
}
// console.log(x, y);
// const [first, second] = [90, 34]
const [first, second] = getValues(90, 34);
// console.log(getValues(90, 34))
const student = {
    name: 'Nobodip',
    age: 32,
    id : 1502176618,
    subject: ['English', 'physics', 'biology']
}

const [firstSubject, secondSubject] =[student.subject];

// object destructuring

// const {name, age} = {name: 'alu', age : 14};
// const {name, age} = {id: 12, name: 'alu', age : 14};

const employee ={
    id: 'vs code',
    designation : 'developer',
    machine : 'Hp',
    language : ['html', 'css', 'js'],
    specification: {
        height : 66,
        weight : 67,
        address : 'Dhaka',
        drink : 'water',
        watch : {
            color: 'black',
            price: 500,
            brand : 'Apple'
        }
    }
}

const {machine, id} = employee;
const{weight, address} = employee.specification;

const{brand} = employee?.specification?.watch;
