var avgDun = 50;

// if( avgDun >= 90 ){
//   console.log( name + ' Ð±Ð¾Ð» ÐžÐÐ¦ ÑÑƒÑ€Ð»Ð°Ð³Ð°Ñ‚Ð°Ð½');
// } else if( avgDun < 90 && avgDun >= 80) {
//   console.log( name + ' Ð±Ð¾Ð» Ð¡ÐÐ™Ð ÑÑƒÑ€Ð»Ð°Ð³Ð°Ñ‚Ð°Ð½');
// } else if( avgDun < 80 && avgDun >= 70) {
//   console.log( name + ' Ð±Ð¾Ð» Ð”Ð£ÐÐ” ÑÑƒÑ€Ð»Ð°Ð³Ð°Ñ‚Ð°Ð½');
// }  else {
//   console.log( name + ' Ð±Ð¾Ð» ÐœÐ£Ð£ ÑÑƒÑ€Ð»Ð°Ð³Ð°Ñ‚Ð°Ð½');
// }

switch (true) {
  case avgDun >= 90:
    console.log(name + " A");
    break;
  case avgDun < 90 && avgDun >= 80:
    console.log(name + " B");
    break;
  case avgDun < 80 && avgDun >= 70:
    console.log(name + " C");
    break;
  default:
    console.log(name + " D");
}
