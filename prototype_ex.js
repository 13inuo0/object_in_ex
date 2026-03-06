function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
    console.log(`Hello, My Name is ${this.name}, i'm ${this.age} years old`);
};

const chulsu = new Person("chulsu", 32);
chulsu.introduce()