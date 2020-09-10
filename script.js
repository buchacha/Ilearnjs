function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let user = {
  name: "John",
  age: 30,
  'like coffee': true
};

let key = "name";
alert( user.name ); 
alert( user["name"] ); 
// user["like coffee"] = true
alert(user["like coffee"])
alert(user["like tea"])
console.log(user)


car = prompt('Ваша любимая машина: ', 'Mercedes')

user["car"] = car

alert(user.car)






