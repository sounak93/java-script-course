let DATA = "Secret data";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("data =", DATA);
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = "New data";
  }
}

let student1 = new User("Sounak", "sounak@hih7.com");
let student2 = new User("Rahul", "rahul@hih7.com");

let admin1 = new Admin("admin", "admin@gmail.com");
