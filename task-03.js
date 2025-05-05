const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//Mamy pustą listę w HTML-u (<ul class="gallery"></ul>) oi chcemy za pomocą JS dodać do niej obrazki, które są w tablicy images
//1. Znajduję listę w HTML, która ma klasę "gallery" (odnosze się tu tylko do elemntów ul)
const gallery = document.querySelector("ul.gallery");

//2.Tworzę HTML z obrazkami, na podstawie tablicy "images"
const imagesHTML = images
  .map(
    //map jak pętla przechodzi przez każdy obrazek w tej liście i robi z niego kawałek kodu HTML <li><img src="ADRES" alt="OPIS"></li> (dla każdego obrazka tworzę <li> z <img>)
    (image) => `<li>
    <img src = "${image.url}" alt = "${image.alt}">
    </li>`
  )
  .join(""); //sklejam wszytskie te kawałki <li> w jeden długi tekst HTML

console.log(imagesHTML);

//3. Wsatwiam ten HTML do listy (ul) na stronie
gallery.insertAdjacentHTML("beforeend", imagesHTML); //wstawia cały ten gotowy HTML (imagesHTML) na koniec listy (gallery)
