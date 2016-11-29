(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

console.log('_______________ Object Destructuring with Required Values -------------');

function ajax() {
  var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var _ref$type = _ref.type;
  var type = _ref$type === undefined ? "get" : _ref$type;
  var _ref$uri = _ref.uri;
  var uri = _ref$uri === undefined ? requiredParameter('uri') : _ref$uri;
  var _ref$data = _ref.data;
  var data = _ref$data === undefined ? {} : _ref$data;
  var _ref$success = _ref.success;
  var success = _ref$success === undefined ? requiredParameter('success') : _ref$success;
  var _ref$error = _ref.error;
  var error = _ref$error === undefined ? function () {} : _ref$error;
  var _ref$isAsync = _ref.isAsync;
  var isAsync = _ref$isAsync === undefined ? true : _ref$isAsync;

  console.log(JSON.stringify({ type: type, uri: uri, data: data, success: success, error: error, isAsync: isAsync }, null, 2));
}
function requiredParameter(name) {
  throw new Error('missing parameter ' + name);
}
try {
  ajax({
    uri: "https://shaklee.com",
    success: function success() {}
  });
} catch (e) {
  console.warn(e.message);
}

},{}],2:[function(require,module,exports){
//querySelectorAll not working
"use strict";

var products = Array.from(document.querySelectorAll('div'));
console.log("products", products);

},{}],3:[function(require,module,exports){
'use strict';

console.log('_______________ Arrow Function -------------');

var createFunction = function createFunction(message) {
  console.log('name ' + message);
};

// var arrowFunction = (message) => {
//   console.log('name ' + message);
// }

var arrowFunction = function arrowFunction(message) {
  return console.log('name ' + message);
};
var arrowX = function arrowX(x) {
  return x * x;
};

arrowFunction('ss');
console.log(arrowX(2));

},{}],4:[function(require,module,exports){
'use strict';

console.log('_______________ const Declaration -------------');

// best practice - define const variables in capitol letters
var PI = 3.14;
var PORT = 81;
var X = 'hello';
//x = 'hi'; not allowed here, you cannot overwrite the const variable
console.log(X);
var value = {};
value.bar = 'foo';
console.log(value);

},{}],5:[function(require,module,exports){
'use strict';

console.log('_______________ Default Values For Function -------------');

//-------pass variable value as default
function greet(greeting) {
  var name = arguments.length <= 1 || arguments[1] === undefined ? 'john' : arguments[1];

  console.log(greeting + ' ' + name);
}

greet('Hello', 'Bull');

//-------pass function as default
function receive(complete) {
  complete();
}

receive(function () {
  console.log('Hello Im complete function0');
});

function receive() {
  var complete = arguments.length <= 0 || arguments[0] === undefined ? function () {
    return console.log('Hello Im complete function');
  } : arguments[0];

  complete();
}
receive();

var receive1 = function receive1() {
  var complete = arguments.length <= 0 || arguments[0] === undefined ? function () {
    return console.log('Hello Im complete function1');
  } : arguments[0];
  return complete();
};
receive1();

},{}],6:[function(require,module,exports){
"use strict";

console.log('_______________ Destructuring Assignment -------------');
//ES5
var obj = {
  color: "blue"
};
console.log(obj.color);

//ES6
var _color1 = {
  color1: "red"
};
var color1 = _color1.color1;

console.log(color1);

var _name$position$country = {
  name: 'jay',
  position: 'lawyer',
  country: "USA"
};
var name = _name$position$country.name;
var position = _name$position$country.position;

console.log(name, position);

function generateObj() {
  return {
    name: 'jay',
    position: 'lawyer',
    country: "USA",
    hobby: 'race'
  };
}

var _generateObj = generateObj();

var hobby = _generateObj.hobby;
var country = _generateObj.country;

console.log(hobby, country);

var people = [{
  name: 'jay',
  position: 'lawyer',
  country: "USA",
  email: "jay@mail.com",
  hobby: 'race'
}, {
  name: 'harry',
  position: 'doctor',
  country: "USA",
  email: "harry@mail.com",
  hobby: 'ride'
}];

var persons = people[1];

function logEmail(_ref) {
  var email = _ref.email;

  console.log(email);
}
logEmail(persons);

},{}],7:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function addTwo(a, b) {
  return a + b;
}
exports.addTwo = addTwo;

},{}],8:[function(require,module,exports){
"use strict";

// not working - revisit later
// function* greet(){
//   let friendly = yield "How";
//   yield "are";
//   yield "you?";
// }
//
// var greeter = greet();
// console.log(greeter.next().value);
// console.log(greeter.next("the heck").value);

},{}],9:[function(require,module,exports){
'use strict';

var _export = require('./export');

console.log('_______________ Import export -------------');

console.log("import addSum = 2+3 = " + _export.addTwo(2, 3));

},{"./export":7}],10:[function(require,module,exports){
'use strict';

console.log('_______________ Let Keyword -------------');
//use let to declare a variable
function varFunc() {
  var pre = 0;
  var cur = 1;
  var i;
  var temp;
  for (i = 0; i < 10; i += 1) {
    temp = pre;
    pre = cur;
    cur = temp + cur;
  }
}

function letFunc() {
  var pre = 0;
  var cur = 1;

  for (var i = 0; i < 10; i += 1) {
    var temp = pre;
    pre = cur;
    cur = temp + cur;
  }
  return cur;
}

console.log('let variable cur' + letFunc());

},{}],11:[function(require,module,exports){
"use strict";

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

for (var _iterator = myMap.keys(), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
  var _ref;

  if (_isArray) {
    if (_i >= _iterator.length) break;
    _ref = _iterator[_i++];
  } else {
    _i = _iterator.next();
    if (_i.done) break;
    _ref = _i.value;
  }

  var key = _ref;

  console.log("keys - " + key);
}

for (var _iterator2 = myMap.values(), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
  var _ref2;

  if (_isArray2) {
    if (_i2 >= _iterator2.length) break;
    _ref2 = _iterator2[_i2++];
  } else {
    _i2 = _iterator2.next();
    if (_i2.done) break;
    _ref2 = _i2.value;
  }

  var value = _ref2;

  console.log("value - " + value);
}

for (var _iterator3 = myMap.entries(), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
  var _ref3;

  if (_isArray3) {
    if (_i3 >= _iterator3.length) break;
    _ref3 = _iterator3[_i3++];
  } else {
    _i3 = _iterator3.next();
    if (_i3.done) break;
    _ref3 = _i3.value;
  }

  var key = _ref3[0];
  var value = _ref3[1];

  console.log(key + " - " + value);
}

//Weak Maps

var myObj = {};
var myFunc = function myFunc() {};

var myWeakMap = new Map();
myWeakMap.set(myObj, "obj");
myWeakMap.set(myFunc, "function");

for (var _iterator4 = myWeakMap.entries(), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
  var _ref4;

  if (_isArray4) {
    if (_i4 >= _iterator4.length) break;
    _ref4 = _iterator4[_i4++];
  } else {
    _i4 = _iterator4.next();
    if (_i4.done) break;
    _ref4 = _i4.value;
  }

  var key = _ref4[0];
  var value = _ref4[1];

  console.log(key + " - " + value);
}

//Iterative functions are not available for weakmaps

},{}],12:[function(require,module,exports){
'use strict';

var _car;

console.log('_______________ Object Enhancements -------------');
var color = 'red';
var speed = '100';
var drive = "go";

var car1 = { color: color, speed: speed }; //ES5

//let car = {color, speed}; //ES6 - like it
var car = (_car = {
  color: color,
  speed: speed
}, _car[drive] = function () {
  console.log('vroom');
}, _car["go1"] = function go1() {
  return console.log('vroom1');
}, _car);
console.log(car.color, car.speed);
console.log(car1.color, car1.speed);
car.go();
car.go1();

},{}],13:[function(require,module,exports){
'use strict';

var d = new Promise(function (resolve, reject) {
  if (true) {
    resolve('Hello World');
  } else {
    reject('Error');
  }
});

d.then(function (data) {
  console.log('Promise Success : ' + data);
})['catch'](function (error) {
  console.log('Promise Error : ' + error);
});

},{}],14:[function(require,module,exports){
'use strict';

console.log('_______________ Rest Parameter -------------');

function sum() {
  var res = 0;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  for (var i = 0; i <= args.length; i++) {
    res += i;
  }
  return res;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));

},{}],15:[function(require,module,exports){
'use strict';

console.log('_______________ Shorthand Properties -------------');
var firstName = 'swathi';
var lastName = 'paipalle';

var person = { firstName: firstName, lastName: lastName };
console.log(person);

var middleName = 'R';

var fullName = { person: person, middleName: middleName };
console.log(fullName);

},{}],16:[function(require,module,exports){
'use strict';

console.log('_______________ Spread Operator -------------');

//spread operator allows you to spread the array in to individual items
var first = [1, 2, 3];
var second = [4, 5, 6];

console.log(first); //returns [1,2,3]
console.log.apply(console, first); //returns 1 2 3
console.log.apply(console, second); //returns 4 5 6

// first.push(second);
first.push.apply(first, second);

console.log(first);

var add = function add(a, b, c) {
  return a + b + c;
};

console.log(add.apply(undefined, first));
console.log(add.apply(undefined, second));

},{}],17:[function(require,module,exports){
"use strict";

var _templateObject = _taggedTemplateLiteralLoose(["It's ", " I'm ", ""], ["It's ", " I'm ", ""]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

console.log('_______________ String Template -------------');
//ES5 way
var salutation = "Hello";
var greet = salutation + ", world!";

console.log(greet);

//ES6 way = allows u to put variables inside string

var greeting = salutation + " , World";
console.log(greeting);

//respects white space and lines

var planet = 'Earth';
var greetWorld = "\n\n" + salutation + " , World\n  how\n\n      are\n\n        you\n            on\n                " + planet + "\n";
console.log(greetWorld);

var message = "It's " + new Date().getHours() + " I'm sleepy";
console.log(message);

//parse string using function
function tag(strings) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (values[0] < 20) {
    values[1] = 'awake';
  }
  console.log(values);
  console.log(strings);
  return strings[0] + " " + values[0] + " " + strings[1] + " " + values[1];
}
var message1 = tag(_templateObject, new Date().getHours(), '');
console.log(message1);

},{}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]);
