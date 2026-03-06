const obj1 = {}; // 빈 객체

const obj2 = {
  name: "철수", // 키(key)와 값(value) & 속성(property)
  age: 20,
};

console.log(obj2.name); // 마침표 연산자
console.log(obj2["age"]); // 대괄호 연산자

for (let key in obj2) {
  console.log(obj2[key]);
  // console.log(obj2.key) --잘못된 형태
}

const person = {
  name: "철수",
  age: 20,
  workingDay: ["mon", "wed", "sun"],
  introduce: function () {
    // 메소드(method)
    console.log(`${this.name}은 ${this.age}살 입니다.`);
  },
};
person.introduce();

// in 키워드 _ 객체 데이터에 특정 속성이 존재하는지 확인하는 키워드
console.log("name" in person); // true
console.log("weight" in person); // false
