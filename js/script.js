// afficher une liste de livres à partir du tableau
let bookList = [
  {
    title: "Éclair d'Amour à Paris",
    picture: "https://placehold.co/300x400",
    author: "Théophile Bouchard",
    description: "Lorsque Sophie, une pâtissière timide de New York, voyage à Paris pour un concours de pâtisserie, elle ne s'attend pas à rencontrer un charismatique chef français, Pierre. Leurs différences culturelles et culinaires sèment le chaos, mais est-ce que l'amour et la cuisine les uniront ?"
  },
  {
    title: "L'Énigme du Manoir Hanté",
    picture: "https://placehold.co/300x400",
    author: "Adèle Dufresne",
    description: "Le détective amateur, Emily, reçoit une invitation énigmatique pour passer la nuit dans un manoir réputé hanté. Elle et son groupe d'amis se retrouvent pris au piège dans un labyrinthe de mystères et de phénomènes paranormaux. Emily doit résoudre l'énigme du manoir pour sauver ses amis avant qu'il ne soit trop tard."
  },
  {
    title: "L'Orchidée Sanglante",
    picture: "https://placehold.co/300x400",
    author: "Félix Chevalier",
    description: "Dans le monde exotique de l'orchidée noire, l'experte en botanique, Amelia, se retrouve mêlée à une série de meurtres mystérieux. Elle devra démêler les fils de cette intrigue mortelle tout en veillant à ce que l'orchidée rare et précieuse ne tombe pas entre de mauvaises mains."
  },
]

let bookListContainer = document.querySelector(".book__list");

for (let eachBook of bookList) { // for (let element of array)
  let bookCard = document.createElement("article");
  bookCard.classList.add("card"); // ajoute une classe à l'élément html
  bookCard.style.width = "18rem"; // pas une bonne pratique, passer par le css

  // <img src="..." />
  let bookPicture = document.createElement("img");
  bookPicture.src = eachBook.picture;

  // <h3>...</h3>
  let bookTitle = document.createElement("h3");
  bookTitle.textContent = eachBook.title;

  let bookAuthor = document.createElement("h4");
  bookAuthor.textContent = eachBook.author;

  let bookDescription = document.createElement("p");
  bookDescription.textContent = eachBook.description;

  // je créé la structure de la carte du livre à afficher
  bookCard.appendChild(bookPicture);
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookDescription);

  // j'ajoute la carte du livre à la liste des livres
  bookListContainer.appendChild(bookCard);
}

// filtrer les livres en fonction de leur statut : lu, à lire, en cours de lecture


// pouvoir changer le statut d'un livre


// pouvoir noter un livre