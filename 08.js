// Coercion буюу автомат төрөл хувиргалт, операторуудын ажиллах дараалал
console.log("======== LESSON-8 ========");
console.log(
  "Coercion буюу автомат төрөл хувиргалт, операторуудын ажиллах дараалал"
);
var a = 12;
a = 16 + true;
console.log(typeof a);
console.log(a);

// Coersion
// left to right
a = 18 + true + false + "2";
console.log(a); // 18 + 1 + 0 + "2" = 192

// TypeScript
// Operator precedence

var result = 4 > 2 > 1;
//  4 > 2 = true
//  true > 1 = false
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
console.log("Result:" + result);
