console.log('_______________ Object Destructuring with Required Values -------------');

function ajax({
  type = "get",
  uri = requiredParameter('uri'),
  data = {},
  success = requiredParameter('success'),
  error = () => {},
  isAsync = true } = {}){
    console.log(JSON.stringify({type, uri, data, success, error, isAsync}, null, 2));
}
function requiredParameter(name){
  throw new Error(`missing parameter ${name}`);
}
try {
  ajax({
    uri:"https://shaklee.com",
    success: () => {}
  });
}
catch (e) {
  console.warn(e.message);
}
