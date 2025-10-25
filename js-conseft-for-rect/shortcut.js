// 'apple', 5, true, {}, []
// '', 0, false, null, undefined
let myVar = 5;
if (myVar) {
    myVar = myVar * 100;
} else{
    myVar = 0;
}

let myMoney = 50;
// you check negative of false anythind
if(!myMoney){

}

const money = 800;
let food;
if(money > 100){
    food = 'biryani';
} else{
    food = 'cha biscuit'
}

// ternary

let food1 = money > 100 ? 'biryani' : 'cha biscuit' ;
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter Water';
// console.log(drink);

// 
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr);

// string to number

const input = '650';
const inputNum = +input;
// console.log(inputNum);

// 
const isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('Hide User')

// isActive ? showUser(): hideUser();
// use && if the left side is true then right side will be executed
isActive && showUser();

// use || if the left side is false then right side will be executed

isActive || hideUser();

// togol
isActive = !isActive
