// Нөхцөл шалгалт, prompt ашиглан хэрэглэгчээс утга авах
console.log("======== LESSON-9 ========");
console.log("Нөхцөл шалгалт, prompt ашиглан хэрэглэгчээс утга авах");

// var age = 25;

var bithday = prompt("Please enter birthday:");
// 12 + 10 -1 - 10
// age += 10;
// age--;
// age -= 10;

// Hasah ued NaN gardag yum bn
console.log(bithday);
if (bithday !== null) {
  var currentYear = new Date().getFullYear();
  var age = currentYear - bithday;
  if (age > 18) {
    alert("Helo,\nIts me " + age);
    console.log("Adult");
  } else {
    console.log("Child");
  }
} else {
  alert("Required birthday");
}
// alert("Helo,\nIts me " + age);
