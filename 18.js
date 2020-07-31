// 18) Массивтай танилц, pop, push, shift, unshift, length функцүүд
var languages = ["Javascript", "Python", "C#", "Typescript"];
// console.log(languages[0]); //Javascript
// console.log((languages[2] = "Go")); //C# => to GO

// lenght
// console.log(languages.length); // 4

// Add element
// console.log((languages[5] = "PHP")); // PHP
// console.log(languages); // (6) ['Javascript', 'Python', 'Go', 'Typescript', …, 'PHP']

// OR
// console.log((languages[languages.length] = "ReactJS"));
// console.log(languages);

// unshift -> Add first element
languages.unshift("C++"); //['C++','Javascript', 'Python', 'C#', 'Typescript']

// Delete first element
languages.shift(); //['Javascript', 'Python', 'C#', 'Typescript']
// console.log(languages);

languages.push("Vue"); // Add to Vue (5) ['Javascript', 'Python', 'C#', 'Typescript', 'Vue']
// console.log(languages);

languages.pop("Vue"); //Remove Vue
// console.log(languages); //(4) ['Javascript', 'Python', 'C#', 'Typescript']

console.log(languages.indexOf("C#")); // If false return -1

if (languages.indexOf("Python")) {
  var index = languages.indexOf("Python");
  console.log("Found this Python" + " Index of: " + index);
} else console.log("Not found this Python");
