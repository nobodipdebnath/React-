const person = {
  name: "Rana",
  profession: "Developer",
  age: 21,
  25: 'Rain',
  'son-name': 'Alif',
  address: "Dhaka",
};
// dot notation

const prof1 = person.profession;

// bracket notation

const prof2 = person['profession'];
const pName = 'profession';
const prof3 = person[pName];
// console.log(prof3);
// console.log(prof2);

const season = person['25'];
// console.log(season)
const sonName = person['son-name'];
console.log(sonName);
