console.log('_______________ Arrow Function -------------');

var createFunction = function(message){
  console.log('name ' + message);
}

// var arrowFunction = (message) => {
//   console.log('name ' + message);
// }

var arrowFunction = message => console.log('name ' + message)
var arrowX = x => x * x;

arrowFunction('ss');
console.log(arrowX(2));
