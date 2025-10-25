const products = [
    {name: 'laptop', price: 32000, brand : 'lenovo', color: 'black'},
    {name: 'phone', price: 3000, brand : 'apple', color: 'Golden'},
    {name: 'watch', price: 7000, brand : 'casio', color: 'yellow'},
    {name: 'sunGlass', price: 8000, brand : 'rebon', color: 'silver'},
    {name: 'camera', price: 9000, brand : 'canon', color: 'gray'}
];

const brands = products.map((product) => {
    return product.brand;
})
// console.log(brands);
const prices = products.map((product) =>{
    return product.price
})
// console.log(prices);

products.forEach(product => console.log(product.color));

products.forEach(product => {

})

// filter

const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const names = products.filter(product => product.name.includes('n'));
// console.log(names);

// find

const special = products.find(product => product.name.includes('n'));
console.log(special);
