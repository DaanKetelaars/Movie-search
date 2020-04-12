/* SEARCH FILTER */

// Aanmaken van de array met content
var films = [{
    title: "1917",
    description: "1917 is een oorlogsfilm die zich afspeelt in de Eerste Wereldoorlog.",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7a/1917poster.jpg"
    // bron: https://en.wikipedia.org/wiki/1917_(2019_film)
  },
  {
    title: "The Joker",
    description: "The Joker is een thriller/actie film over het beroemde karakter uit de batman films.",
    image: "https://www.moviemeter.nl/images/cover/1124000/1124245.jpg"
    // bron: https://www.moviemeter.nl/film/1124245
  },
  {
    title: "Parasite",
    description: "Parasite is een buitenlandse Oscar winnende film.",
    image: "https://images.moviesanywhere.com/76cd3a853ffede1f5983f090839cacc8/8ca75d25-0bc2-4584-9d4c-3a381232c870.jpg"
    // bron: https://moviesanywhere.com/movie/parasite-2019
  },
  {
    title: "Avengers - Endgame",
    description: "Endgame is de meest recente film van de Avengers reeks.",
    image: "https://images.pathe-thuis.nl/18867_450x640.jpg"
    // bron: https://www.pathe-thuis.nl/film/24741/avengers-endgame
  },
  {
    title: "The Irishman",
    description: "The Irishman is een spannende film met film legendes zoals: Robert de Niro, Joe Pesci en Al Pacino.",
    image: "https://www.manners.nl/wp-content/uploads/2019/09/The-Irishman-netflix-trailer-datum-poster-1-600x879.jpg"
    // bron: https://www.manners.nl/poster-datum-trailer-the-irishman-netflix/
  },
  {
    title: "Once upon a time in Hollywood",
    description: "Brad Pitt en Leonardo DiCaprio gaan als bekende Hollywood sterren, terug naar het Hollywood van vroeger.",
    image: "https://www.moviemeter.nl/images/cover/1123000/1123224.jpg"
    // bron: https://www.moviemeter.nl/film/1123224
  },
  {
    title: "Star Wars: The Rise of Skywalker",
    description: "De wereldbekende reeks is terug met hun negende deel.",
    image: "https://static.posters.cz/image/750/poster/star-wars-the-rise-of-skywalker-galactic-encounter-i81806.jpg"
    // bron: https://www.europosters.nl/poster/star-wars-the-rise-of-skywalker-galactic-encounter-v60786
  },
  {
    title: "Ford v Ferrari",
    description: "Matt Damon schittert in de film Ford v Ferrari, een heuse battle in de autosport.",
    image: "https://www.moviemeter.nl/images/cover/1125000/1125116.jpg"
    // bron: https://www.moviemeter.nl/film/1125116
  }
];


var zoekVeld = document.getElementById('zoeken')
var zoekResultatenContainer = document.getElementById('zoekresultaat')

zoekVeld.addEventListener('input', (e) => {

  // als het input veld leeg is, maak dan de zoek resultaten vrij.
  if (e.target.value === '') {
    zoekResultatenContainer.innerHTML = '';
    return;
  }

  // filter in de array films
  var zoekResultaat = films.filter(film => {
    return film.title.toLowerCase().includes(e.target.value.toLowerCase());
  });

  // voor het tonen van de zoek resultaten, maak de zoek resultaten div vrij
  zoekResultatenContainer.innerHTML = '';

  // laat de titels zien van de objecten in de array die de tekst bevatten die ingevoerd is in de input field
  zoekResultaat.forEach((element, index, image) => {
    var heading = document.createElement('h1');
    heading.textContent = element.title;
    zoekResultatenContainer.appendChild(heading);

    var subHeading = document.createElement('p');
    subHeading.textContent = element.description;
    zoekResultatenContainer.appendChild(subHeading);

    var img = document.createElement('img');
    img.src = element.image;
    zoekResultatenContainer.appendChild(img);

  });
});


/* DARK/LIGHT OPTION */

var darkMode = document.getElementById('darkmode');
var lightMode = document.getElementById('lightmode');


function maakDark() {
  document.body.classList.remove('lightmode');
  document.body.classList.add('darkmode');
}

function maakLight() {
  document.body.classList.remove('darkmode');
  document.body.classList.add('lightmode');
}

darkMode.addEventListener('click', maakDark);
lightMode.addEventListener('click', maakLight);


/* RECENT FILMS */
var filmSlider = ['foto00.jpg', 'foto01.jpg', 'foto02.jpg', 'foto03.jpg', 'foto04.jpg'];
// bron once upon a time in hollywood: https://www.manners.nl/netflix-once-upon-hollywood/
// bron irishman: https://www.manners.nl/poster-datum-trailer-the-irishman-netflix/
// bron star wars: https://www.filmhallen.nl/film/star-wars-the-rise-of-skywalker-2d/
// bron ford v ferrari: https://topgear.nl/autonieuws/ford-v-ferrari-de-eerste-trailer/

var filmImg = document.querySelector('#foto');
var nextBtn = document.querySelector('#next');
var prevBtn = document.querySelector('#prev');

var huidigFoto = 0;
toonHuidigeFoto();

function toonHuidigeFoto() {
  filmImg.src = 'img/' + filmSlider[huidigFoto];
}

function NextImg() {
  huidigFoto = huidigFoto + 1;
  if (huidigFoto > filmSlider.length - 1) {
    huidigFoto = 1;
  }
  toonHuidigeFoto();
}

function prevImg() {
  huidigFoto = huidigFoto - 1;
  if (huidigFoto < 1) {
    huidigFoto = filmSlider.length - 1;
  }
  toonHuidigeFoto();
}
nextBtn.addEventListener('click', NextImg);
prevBtn.addEventListener('click', prevImg);



/* QUESTION */
var submitBtn = document.getElementById('submitbtn');

var text;

function quizVraag() {
  	event.preventDefault();
  if (document.vraagform.inputantwoord.value == 1890) {
    document.getElementById("antwoord").innerHTML = "Dat is het juiste antwoord! 😄 ";


  } else {
    document.getElementById("antwoord").innerHTML = "Helaas, dat is het foute antwoord. 😞";

  }
}

submitBtn.addEventListener('click', quizVraag);


/* CHANGE FONT OPTION */
var sansMode = document.getElementById('sansserif');
var serifMode = document.getElementById('serif');


function maakSans() {
  document.body.classList.remove('serif');
  document.body.classList.add('sansserif');
}

function maakSerif() {
  document.body.classList.remove('sansserif');
  document.body.classList.add('serif');
}

sansMode.addEventListener('click', maakSans);
serifMode.addEventListener('click', maakSerif);
