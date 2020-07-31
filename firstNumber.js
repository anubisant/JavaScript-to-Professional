// Бодлого №1
// var sum = 0;
// var limit = 4;

// for (var i = 1; i <= limit; i = i + 1) {
//   sum = sum + i;
//   console.log("i = " + i + " байхад sum = " + sum);
// }

// console.log("1-" + limit + " хүртэлх тооны нийлбэр бол " + sum);

// Бодлого №2

// var sum = 0;
// var limit = 1000;

// for (var i = 1; i <= limit; i = i + 1) {
//   if (i % 7 === 0) {
//     sum = sum + i;
//     console.log("i = " + i + " байхад sum = " + sum);
//   }
// }

// console.log(
//   "1-" +
//     limit +
//     " хүртэлх тоонуудаас 7-д хуваагддаг тоонуудын нийлбэр бол " +
//     sum
// );

//Бодлого №3
// for (var i = 2; i <= 10000; i++) {
//   if (anhniiTooMon(i) === true) console.log(i + " тоо бол анхны тоо мөн");
// }

// function anhniiTooMon(too) {
//   var anhniiTooMon = true;
//   for (var x = 2; x < too; x++) {
//     if (too % x === 0) {
//       anhniiTooMon = false;
//       break;
//     }
//   }

//   return anhniiTooMon;
// }

//Бодлого №4

var arr = [];

for (var i = 1; i < 10; i++) {
  var too = Math.random() * 100;
  var floorToo = Math.floor(too);
  arr.push(floorToo);
}
var minToo = 100;
var minTooInde = -1;

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
