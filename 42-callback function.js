//  message queue
// exucation stack ehleed hereglechiin function iig ajiluulna daraa message queue ajildag.

// Callback function
function hello() {
  console.log("Say hello!");
}
function greet(callBackFunction) {
  callBackFunction();
}
greet(hello);
// Anonymous function buyu nergui function
function greetAnonymouse(test2) {
  test2();
}
greetAnonymouse(function () {
  console.log("greetAnonymouse said hello!");
});
