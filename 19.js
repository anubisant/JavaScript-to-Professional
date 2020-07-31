// 19) Массивийн slice, splice функц, график гаргах жишээ
var languages = ["Javascript", "Python", "C#", "Typescript"];

// Delete splice
// languages.splice(2);

// Delete  slice
var x = languages.slice(1, 2);

var m = [];
m.push("Python");
m.push("R");
m.push("Matlab");
m.push({ name: "Matlab" });
// console.log(m); //(3) ['Python', 'R', 'Matlab']

// Object and Array

var course = {
  name: "Javascript",
  price: 2900,
  lessons: [
    {
      name: "Beginner to Professional",
      lenght: 11.28,
    },
  ],
};

console.log(course);
