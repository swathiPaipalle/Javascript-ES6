console.log('_______________ Rest Parameter -------------');

function sum(...args){
  var res = 0;
  for(var i = 0; i <= args.length; i++){
    res+=i;
  }
  return res;
}

console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5));
