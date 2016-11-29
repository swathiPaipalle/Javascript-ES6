console.log('_______________ Shorthand Properties -------------');
let firstName = 'swathi';
let lastName = 'paipalle';

let person = {firstName, lastName};
console.log(person);

let middleName = 'R';

let fullName = {person, middleName};
console.log(fullName);
