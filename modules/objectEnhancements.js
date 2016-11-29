console.log('_______________ Object Enhancements -------------');
let color = 'red';
let speed = '100';
let drive = "go";

let car1 = {color:color, speed:speed}; //ES5

//let car = {color, speed}; //ES6 - like it
let car = {
  color,
  speed,
  [drive]:function() {
    console.log('vroom');
  },
  "go1":()=>console.log('vroom1')
};
console.log(car.color, car.speed);
console.log(car1.color, car1.speed);
car.go();
car.go1();
