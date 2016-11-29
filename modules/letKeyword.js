console.log('_______________ Let Keyword -------------');
//use let to declare a variable
function varFunc(){
  var pre = 0;
  var cur = 1;
  var i;
  var temp;
  for(i=0; i<10; i+=1)
  {
    temp = pre;
    pre = cur;
    cur = temp + cur;
  }
}

function letFunc(){
  let pre = 0;
  let cur = 1;

  for(let i=0; i<10; i+=1)
  {
    let temp = pre;
    pre = cur;
    cur = temp + cur;
  }
  return cur;
}

console.log('let variable cur' + letFunc());
