myObj = {
    name: "Ivan",
    age: 17,
    salary: 13
}

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(myObj)
console.log(myObj)