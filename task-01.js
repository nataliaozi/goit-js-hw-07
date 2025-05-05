//Znajduję wszystkie elementy li z klasą item
const categories = document.querySelectorAll(".item"); //to wyłapie mi wszystkie elementy z klasą .item

//Wypisuję liczbę kategorii
console.log(`Number of categories: ${categories.length}`);

//Przechodzę po każdej kategorii i wypisuję dane
categories.forEach((category) => {
  //forEach przechodzi po każdej kategorii
  const title = category.querySelector("h2").textContent; //querySelector h2 znajduje nagłowek w tej kategorii a textContent pobiera tekst z <h2>
  const elementsCount = category.querySelectorAll("li").length; //querySelectorAll szuka wszystkich <li> wewnątrz tej kategorii a .length policzy te elementy

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
