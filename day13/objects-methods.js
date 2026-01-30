let user = {
  name: "Amit",
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

user.greet();
