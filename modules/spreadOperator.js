console.log('_______________ Spread Operator -------------');

//spread operator allows you to spread the array in to individual items
var first = [1,2,3];
var second = [4,5,6];

console.log(first);//returns [1,2,3]
console.log(...first);//returns 1 2 3
console.log(...second);//returns 4 5 6

// first.push(second);
first.push(...second);

console.log(first);

 let add = (a,b,c) => {return a+b+c};

console.log(add(...first));
console.log(add(...second));
