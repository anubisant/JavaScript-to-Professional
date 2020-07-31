// object zarlana

var h1 = {
  name: "Ц.Амарбат",
  job: "програмист",
  hobbi: "ном унших",
  location: "монгол",
};

var h2 = {
  name: "У.Ганзориг",
  job: "дизайнер",
  hobbi: "спорт",
  address: {
    location: "Алтай хотхон, 32-115 тоот",
    city: "Улаанбаатар",
    country: "Монгол",
  },
};

var c1 = {
  name: "Javascript хэлийг эхнээс нь дуустал!",
  lessonCount: 116,
  totalMin: 904,
  author: h1,
  price: 199000,
  discount: 26900,
  information: function () {
    console.log(
      "\n\n" +
        this.author.location +
        "-д амьдардаг " +
        this.author.name +
        '-ийн 2019 онд гаргасан "' +
        this.name +
        '" сургалт нь ' +
        this.price +
        "₮ үнэтэй боловч яг одоогоор " +
        this.discount +
        " болж хямдарсан байна!"
    );
  },
  computeHour: function () {
    return Math.round(this.totalMin / 60);
  },

  computeMin: function () {
    return this.totalMin % 60;
  },
};

var c2 = {
  name: "HTML, CSS эхнээс нь дуустал!",
  lessonCount: 128,
  totalMin: 1217,
  author: h2,
  price: 146000,
  discount: 26900,

  information: function () {
    console.log(
      "\n\n" +
        this.author.address.location +
        "-д амьдардаг " +
        this.author.name +
        '-ийн 2019 онд гаргасан "' +
        this.name +
        '" сургалт нь ' +
        this.price +
        "₮ үнэтэй боловч яг одоогоор " +
        this.discount +
        " болж хямдарсан байна!"
    );
  },

  computeHour: function () {
    return Math.round(this.totalMin / 60);
  },

  computeMin: function () {
    return this.totalMin % 60;
  },
};
console.log("GGG", c1.information());
// console.log(
//   c2.name +
//     " сургалт нь " +
//     c2.computeHour() +
//     " цаг " +
//     c2.computeMin() +
//     "мин видеотой."
// );

// console.log(
//   c1.name +
//     " сургалт нь " +
//     c1.computeHour() +
//     " цаг " +
//     c1.computeMin() +
//     "мин видеотой."
// );

// console.log(
//   c1.computeHour() +
//     c2.computeHour() +
//     " цаг " +
//     (c1.computeMin() + c2.computeMin()) +
//     " мин хичээл үзэхнээ."
// );

// c1.information();
// c2.information();

/*
  var aaaaa ='author';
  var bbbb ='hobbi';
  
  console.log(c2[aaaaa][bbbb]);
  
  console.log(c2.author.address.city);
  */
