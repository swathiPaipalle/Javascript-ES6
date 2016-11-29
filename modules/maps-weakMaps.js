console.log('_______________ Maps and Weak Maps -------------');
var myMap = new Map();

/** API methods available
* set()
* get()
* size()
* clear()
* has()
*/

myMap.set("foo", "bar");
myMap.set("Hello", "World");
console.log(myMap.get('foo'));
// console.log(myMap.clear());

console.log(myMap.size);
console.log(myMap.has('Hello'));


/** Iterators available
* keys()
* entries()
* values()
*/

for(var key of myMap.keys()){
  console.log("keys - "+key);
}

for(var value of myMap.values()){
  console.log("value - "+value);
}

for(var [key, value] of myMap.entries()){
  console.log(key +" - "+value);
}

//Weak Maps

var myObj = {};
var myFunc = function(){};

var myWeakMap = new Map();
myWeakMap.set(myObj, "obj");
myWeakMap.set(myFunc, "function");

for(var [key, value] of myWeakMap.entries()){
  console.log(key +" - "+value);
}

//Iterative functions are not available for weakmaps
