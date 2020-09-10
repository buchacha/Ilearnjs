// name = "Ivan"

// let user = {
//   name,  // тоже самое, что и name:name
//   age: 30
// };

// console.log(user)

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

alert( user.noSuchProperty == undefined );

for (let key in user) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}