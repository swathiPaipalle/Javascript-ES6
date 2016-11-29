console.log('_______________ Destructuring Assignment -------------');
//ES5
var obj = {
  color:"blue"
};
console.log(obj.color);

//ES6
var {color1} = {
  color1:"red"
};
console.log(color1);

var {name, position} = {
  name:'jay',
  position:'lawyer',
  country:"USA"
}
console.log(name, position);

function generateObj(){
  return {
    name:'jay',
    position:'lawyer',
    country:"USA",
    hobby:'race'
  }
}
var {hobby, country} = generateObj();
console.log(hobby, country);

var people = [
  {
    name:'jay',
    position:'lawyer',
    country:"USA",
    email:"jay@mail.com",
    hobby:'race'
  },
  {
    name:'harry',
    position:'doctor',
    country:"USA",
    email:"harry@mail.com",
    hobby:'ride'
  }
];

var [,persons] = people;
function logEmail({email}){
  console.log(email);
}
logEmail(persons);
