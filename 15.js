// 15) Функцийн Statement болон Expression бичиглэл

var module = function (number) {
  var mod;
  if (number < 0) mod = -number;
  else mod = number;
  return mod;
  //   console.log(number, "Expression function is working...", mod);
};

function mod(number) {
  console.log("Expression function is working...", number);
}
var addModule = function (a, b, c) {
  var Niilber = module(a) + module(b) + module(b);
  return Niilber;
};
// var x = module(-255);
// mod(112);

var sum = addModule(-1, -2, -3);
console.log(sum);
