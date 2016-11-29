console.log('_______________ String Template -------------');
//ES5 way
var salutation = "Hello";
var greet = salutation+", world!";

console.log(greet);


//ES6 way = allows u to put variables inside string

var greeting = `${salutation} , World`;
console.log(greeting);

//respects white space and lines

var planet = 'Earth';
var greetWorld= `

${salutation} , World
  how

      are

        you
            on
                ${planet}
`;
console.log(greetWorld);

var message = `It's ${new Date().getHours()} I'm sleepy`;
console.log(message);


//parse string using function
function tag(strings, ...values){
  if(values[0]<20){
    values[1]='awake';
  }
  console.log(values);
  console.log(strings);
  return `${strings[0]} ${values[0]} ${strings[1]} ${values[1]}`
}
var message1 = tag`It's ${new Date().getHours()} I'm ${''}`;
console.log(message1);
