// Value  (primitive VS Object)
var a = 12; //  a ===> 12
var b = a; //  b ===> 12

a = 13;

console.log("a = " + a);
console.log("b = " + b);

// Reference
var p1 = {
  name: "notebook",
  price: "300$",
};

var p2 = p1;

p1.name = "оймс";
p2.price = 1200;

console.log("p1 = " + p1.name + ", " + p1.price);
console.log("p2 = " + p2.name + ", " + p2.price);

var x = [2, 6, 10];
var y = x;

y[0] = 50;
x[2] = 7;

console.log(x);
console.log(y);

var name = "notebook";
var price = 250000;

info(name, price);

console.log(name + " бүтээгдэхүүний үнэ : " + price);

function info(name, price) {
  console.log(name + " нэртэй бүтээгдэхүүн " + price + " үнэтэй байснаа ");

  price = price - 5000;

  console.log(price + " үнэтэй болж хямдарлаа...");
}

////////////////////////////////////////////////////////

var product = {
  name: "shoe",
  price: "15000",
};

// Primitive Vs Object

infoNew(product);

console.log(product.name + " бүтээгдэхүүний үнэ : " + product.price);

function infoNew(p) {
  console.log(p.name + " нэртэй бүтээгдэхүүн " + p.price + " үнэтэй байснаа ");

  p.price = p.price - 11000;

  console.log(p.price + " үнэтэй болж хямдарлаа...");
}
