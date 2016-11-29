let d = new Promise((resolve, reject) => {
  if(true){
    resolve('Hello World');
  }else{
    reject('Error');
  }
});

d.then((data)=>{
    console.log('Promise Success : '+data);
  })
 .catch((error) => {
   console.log('Promise Error : '+error);
 });
