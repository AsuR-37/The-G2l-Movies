 const apikey = "b324a136";
 const baseLink = "https://t.me/theg2lmovies/";

document.addEventListener("DOMContentLoaded", () => {
  // Elements

 
  //f169b8ee

  // Movie list
  const movies = [
    "Inception",
    "Baahubali: The Beginning",
    "Dangal",
    "K.G.F: Chapter 1",  // exact OMDb title
  "K.G.F: Chapter 2",
    "3 Idiots",
    "Interstellar",
    "Avengers: Endgame",
    "The Dark Knight",
    "Pushpa: The Rise",
    "RRR",
    "Drishyam",
    "Pathaan",
    "War",
    "Jawan",
    "Kantara",
    "Gadar 2",
    "Spider-Man: No Way Home",
    "Iron Man",
    "omg 2",
    "Iron Man 2"
  ];

  // OMDB API key

  // Fetch movie details and update card
  async function fetchMovie(title, card) {
    try {
      const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apikey}`);
      const data = await response.json();

      if (data.Response === "True") {
        card.querySelector(".movie-poster").src = data.Poster !== "N/A" ? data.Poster : "https://via.placeholder.com/200x300?text=No+Image";
        card.querySelector(".movie-title").textContent = data.Title;
        console.log("Fetched:", data.Title);
      } else {
        console.log("Not found:", title);
        card.querySelector(".movie-poster").src = "https://via.placeholder.com/200x300?text=No+Image";
        card.querySelector(".movie-title").textContent = title;
      }
    } catch (err) {
      console.error("Error fetching:", title, err);
      card.querySelector(".movie-poster").src = "https://via.placeholder.com/200x300?text=Error";
      card.querySelector(".movie-title").textContent = title;
    }
  }

  // Select all movie cards
  const cards = document.querySelectorAll(".home");

  // Loop through movies and assign posters
  movies.forEach((movie, index) => {
    if (cards[index]) {
      fetchMovie(movie, cards[index]);

      // Optional: click on card to open Telegram link
      
    }
  });

const moreBollywood = [
  "Udaan",
  "Gangs of Wasseypur",
  "Son of Sardaar",            // ✅ सही title
  "OMG: Oh My God!",           // ✅ इसमें ! है
  "sitaare Zameen Par",          // ✅ सही नाम
  "Raid 2",                      // ✅ Raid 2 नहीं है, सिर्फ Raid
  "War 2",                     // ✅ Upcoming, सही लिखा
         "Singham Again",         // ✅ “Narsimha” वाला नाम OMDB में नहीं मिलता
  "Chhaava",                   // ✅ सही नाम (upcoming)
  "Housefull 5",               // ✅ बिना A
            "Shaitaan",     // ✅ अगर short film है तो सही
  "khiladi 786",                     // ✅ South film (Bollywood में नहीं)
            "Teri Baaton Mein Aisa Uljha Jiya",       // ✅ upcoming
  "Munna Bhai M.B.B.S.",       // ✅ सही नाम
  "Lage Raho Munna Bhai",      // ✅ सही नाम
               "Munjya",     // ✅ बिना space
  "Ghajini",
  "siddharth roy",  // ✅ सही नाम
  "rowdy rathore",
  "Article 370",
  "Bad Newz"

  // ✅ “Kahani” official spelling
];


  const cards2 = document.querySelectorAll(".bollywood");
    moreBollywood.forEach((movie, index) => {
    if (cards2[index]) {
      fetchMovie(movie, cards2[index]);

      
    }
  });

  const hollywoodMovies = [
  "The Godfather",
  "The Godfather Part II",
  "The Dark Knight",
  "Pulp Fiction",
  "Fight Club",
  "Forrest Gump",
  "The Lord of the Rings: The Fellowship of the Ring",
  "The Lord of the Rings: The Two Towers",
  "The Lord of the Rings: The Return of the King",
  "Avengers: Infinity War",
  "Avengers: Endgame",
  "The Matrix",
  "The Shawshank Redemption",
  
  "Gladiator",
  "Titanic",
  "Avatar",
 "Captain America: Civil War",
  "12 Angry Men",
  "The Good, the Bad and the Ugly",
  "Jurassic Park",
  
  "Schindler's List"
];
  const cards3 = document.querySelectorAll(".hollywood");
    hollywoodMovies.forEach((movie, index) => {
    if (cards3[index]) {
      fetchMovie(movie, cards3[index]);

      // Optional: click on card to open Telegram link
   
    }
  });


const webSeries = [
  "Asur: Welcome to Your Dark Side",  // correct OMDb title
     "Asur: Welcome to Your Dark Side",
 "Panchayat",
 "Wednesday",
 "mandala murders",
  "Paatal Lok",
   "squid game",
  "Mirzapur",    
  "Mirzapur",                         // covers all seasons
  "Sacred Games",
  "Stranger things",
 
  "Delhi Crime",
  "Special OPS",
  "Scam 1992: The Harshad Mehta Story",
  
  "money heist",
  "Breathe: Into the Shadows",           // full title as on OMDb
  // Additional popular ones
  
  "kota factory",
  
  "taaza khabar",
  "Aashram",
  "Gullak",
  "Rocket boys",
 
  "Criminal Justice"
];

  const cards4 = document.querySelectorAll(".webseries");
    webSeries.forEach((movie, index) => {
    if (cards4[index]) {
      fetchMovie(movie, cards4[index]);

      // Optional: click on card to open Telegram link
    
    }
  });
// post 88

let webSeriesCards = document.querySelectorAll(".movie-card.webseries");
 webSeriesCards.forEach(card=>{
    card.addEventListener("click",()=>{
      console.log("work event list ner");
       let postNumber = card.getAttribute("data-post");
       if (postNumber) {
     window.open(baseLink+postNumber, "_blank");

    } else {
      alert("Movie is not available this time. Please check Telegram group.");
    }
    })
 })

  const southMovies = [
  "Baahubali 2: The Conclusion",
  "Vikram",
  "Mersal",
  
  "Mahanati",
  "Eega",
  "Arjun Reddy",
  "Jersey",
  "Ala Vaikunthapurramuloo",
  "Sarileru Neekevvaru",
  "Drishyam 2",
  "Drishyam",
    "Petta",
  "Super Deluxe",
  "96",
    "Kabali",
  "Naa Peru Surya Naa Illu India",
  "Kaithi",
  "Vikram Vedha",
  "Rangasthalam",
  "Baaghi 4",
  "Theri"

];

  const cards5 = document.querySelectorAll(".south");
    southMovies.forEach((movie, index) => {
    if (cards5[index]) {
      fetchMovie(movie, cards5[index]);

      // Optional: click on card to open Telegram link
     
    }
  });

// Select all South movie cards
let southCards = document.querySelectorAll(".movie-card.south");

// Base Telegram link


// Add click event to each card
southCards.forEach(card => {
  card.addEventListener("click", () => {
    let postNumber = card.getAttribute("data-post"); // get post number
    if(postNumber) {
      window.open(baseLink + postNumber, "_blank"); // open Telegram post in new tab
    } else {
      alert("Post link not available!");
    }
  });
});

 
//let baseLink2 = "https://t.me/theg2lmovies/";
let homeCards = document.querySelectorAll(".movie-card.home");

// Debug: check cards mil rahe hain ya नहीं
console.log("Total Home Cards Found:", homeCards.length);

homeCards.forEach(card => {
  card.addEventListener("click", () => {
    let postNumber = card.getAttribute("data-post");
    console.log("Clicked Card Post Number:", postNumber);

    if (postNumber) {
     window.open(baseLink+postNumber, "_blank");

    } else {
      alert("Movie is not available this time. Please check Telegram group.");
    }
  });
});

let bollywoodCards = document.querySelectorAll(".movie-card.bollywood");
 bollywoodCards.forEach(card=>{
    card.addEventListener("click",()=>{
      console.log("work event list ner");
       let postNumber = card.getAttribute("data-post");
       if (postNumber) {
     window.open(baseLink+postNumber, "_blank");

    } else {
      alert("Movie is not available this time. Please check Telegram group.");
    }
    })
 })

let hollywoodCards = document.querySelectorAll(".movie-card.hollywood");
 hollywoodCards.forEach(card=>{
    card.addEventListener("click",()=>{
      console.log("work event list ner");
       let postNumber = card.getAttribute("data-post");
       if (postNumber) {
     window.open(baseLink+postNumber, "_blank");

    } else {
      alert("Movie is not available this time. Please check Telegram group.");
    }
    })
 })





 
});
// Ensure baseLink is global


async function addHomeMovie(movieName, postNumber) {
  if (!movieName || !postNumber) {
    console.error("Movie name and post number are required!");
    return;
  }

  // Fetch OMDb data
  let poster = "https://via.placeholder.com/200x300?text=No+Image";
  let title = movieName;

  try {
    const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${apikey}`);
    const data = await res.json();

    if (data.Response === "True") {
      title = data.Title;
      poster = data.Poster !== "N/A" ? data.Poster : poster;
    }
  } catch (err) {
    console.error("Error fetching movie:", movieName, err);
  }

  // Create movie card
  const newCard = document.createElement("div");
  newCard.classList.add("movie-card", "home");
  newCard.setAttribute("data-post", postNumber);
  newCard.innerHTML = `
    <img src="${poster}" alt="${title}" class="movie-poster">
    <div class="movie-title">${title}</div>
  `;

  // Attach click event
  newCard.addEventListener("click", () => {
    const post = newCard.getAttribute("data-post");
    if (post) {
      window.open(baseLink + post, "_blank");
    } else {
      alert("Movie is not available this time. Please check Telegram group.");
    }
  });

  // Find last dummy-box in Home section
  let homeContainers = document.querySelectorAll(".movies-section .dummy-box");
  let lastBox = homeContainers.length ? homeContainers[homeContainers.length - 1] : null;

  // Check if last box has <7 movies
  if (!lastBox || lastBox.children.length >= 7) {
    // Create new dummy-box
    lastBox = document.createElement("div");
    lastBox.classList.add("dummy-box");
    document.querySelector(".movies-section").appendChild(lastBox);
  }

  // Append movie card
  lastBox.appendChild(newCard);
  console.log(`✅ "${title}" added to Home section with post number ${postNumber}`);
}
