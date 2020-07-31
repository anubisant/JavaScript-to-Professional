// for (var i = 0; i <= 5; i++) {
//   console.log(i);
// }
// var command = "233";
// while (command !== "quit") {
//   command = prompt("ggg");
//   alert(command);
// }

var too = [23, 4, 23, 5123, 523, 53, 23, 14];

for (var i = 0; i < too.length; i++) {
  if (too[i] % 7 !== 0) continue;
  console.log(too[i]);
  break;
}
