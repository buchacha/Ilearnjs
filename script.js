let user = {
  firstName: "Илья",
  sayHi() {
    let arrow = () => {alert(this.firstName)};
    arrow();
    alert(this.firstName)
  }
};

user.sayHi(); // Илья