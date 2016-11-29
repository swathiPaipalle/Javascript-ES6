console.log('_______________ Default Values For Function -------------');

//-------pass variable value as default
function greet(greeting, name='john'){
  console.log(greeting + ' '+ name);
}

greet('Hello', 'Bull');

//-------pass function as default
function receive(complete){
  complete();
}

receive(function(){
  console.log('Hello Im complete function0');
});

function receive(complete = ()=>console.log('Hello Im complete function')){
  complete();
}
receive();


let receive1 = (complete = ()=>console.log('Hello Im complete function1'))=>complete()
receive1();
