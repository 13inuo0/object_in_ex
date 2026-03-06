function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function () {
    return `제 이름은 ${this.name}이고 ${this.age}살 입니다.`;
  };
}
const person1 = new Person("철수", 12);
const person2 = new Person("영희", 16);
const person3 = new Person("이슬", 17);
const person4 = new Person("민수", 14);
