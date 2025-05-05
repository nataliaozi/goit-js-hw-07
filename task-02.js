const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//Pobieram listę ul z HTML po id = "ingredients"
const list = document.querySelector("#ingredients");
console.log(list);

//Dla każdego składnika tworzę li, dodaję tekst oraz klasę
const items = ingredients.map((ingredients) => {
  //używam map aby z każdego elementu z tablicy stworzyć nowy elemnt li; każdy z znich ma tekst i klasę
  const li = document.createElement("li"); //tworzę nowy element li
  li.textContent = ingredients; //dodaję tekst składnika
  li.classList.add("item"); // dodaję klasę CSS item
  return li; //zwracam już gotowy element li
});

//Jedną operacją dodaję wszystkie elementy li do ul
list.append(...items); //metoda append dodaje elementy do wskazanego elementu a operator spread rozpakowuje tablicę elemntów li więc append() doda je wszytskie naraz
