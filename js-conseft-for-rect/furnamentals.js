// how to declare a variable using let and const

const fatherName = 'Khitish';

let season = 'Rain';
season = 'Winter';

// condition 6 basic condition  > < === <= >= !==
// multiple condition = && , ||

if(fatherName === 'khitish' || season === 'Rain'){

} else if(fatherName === 'Khitish'){

}


// array: declare
// index ,
// length, push, 
const numbers = [2, 4, 5, 6, 7,8 ,10];
numbers[0] = 56;

// loop

for(let i= 0 ;i< numbers.length;i++){
    const number = numbers[i];
    console.log(number);
}

// function

function mul(a, b){
    const result = a * b;
    return result
}

const output = mul(36, 64);
console.log(output);

// object

const student = {
    name: 'Nobodip',
    age: 32,
    id : 1502176618,
    subject: ['English', 'physics', 'biology']
}
const myVariable = 'age';
console.log(student.age); //direct by property
console.log(student['age']); //access vid property name string

console.log(student[myVariable]);
