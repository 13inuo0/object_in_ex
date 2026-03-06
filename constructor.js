function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function () {
    return `제 이름은 ${this.name}이고 ${this.age}살 입니다.`;
  };
}

const person1 = new Person("철수", 20);
const person2 = new Person("이슬", 23);
console.log(person1.name);
console.log(person2.age);
console.log(person1.introduce())
