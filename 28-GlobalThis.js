var lastname = "болдоо";
console.log(lastname);
console.log(window.lastname);
console.log(globalThis.lastname);
window.alert("Window: Энэ бол глобаль хэсгээс дуудаж байна.");

huniiMedeelel();

function huniiMedeelel() {
  var firstname = "Нараа";
  console.log("Энэ хүний овог нэр : " + lastname + " " + firstname);
  globalThis.alert("GlobalThis: Одоо бол функц дотроос дуудаж байна.");
}
