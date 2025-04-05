document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentYear").innerHTML = new Date().getFullYear();     
    document.getElementById("lastModified").textContent = "Last Modification: " + new Date(document.lastModified).toLocaleString();

    // const hamButton = document.querySelector("#menu");
    // const navigation = document.querySelector(".navigation");

    // hamButton.addEventListener("click", () => {
    //     navigation.classList.toggle("open");
    //     hamButton.classList.toggle("open");
    // });

    const movies = [
        {
            movieTitle: "Karate Kid Ledgend",
            yearReleased: "2025",
            released: "No",
            imageURL:
            "images/karatekidledgend.png"
        },
        {
            movieTitle: "Karate of Kings",
            yearReleased: "2025",
            released: "No",
            imageURL:
            "images/kingofkings.png"
        },
        {
            movieTitle: "Last Rodeo",
            yearReleased: "2025",
            released: "No",
            imageURL:
            "images/lastrodeo.png"
        },
        {
            movieTitle: "Lilo and Stitch",
            yearReleased: "2025",
            released: "No",
            imageURL:
            "images/liloandstitch.png"
        },
        {
            movieTitle: "Little Mermaid",
            yearReleased: "2023",
            released: "Yes",
            imageURL:
            "images/littlemermaid.png"
        },
        {
            movieTitle: "Moana 2",
            yearReleased: "2025",
            released: "Yes",
            imageURL:
            "images/moana2.png"
        },
        {
            movieTitle: "Mufasa",
            yearReleased: "2024",
            released: "Yes",
            imageURL:
            "images/mufasa.png"
        },
        {
            movieTitle: "Twisters",
            yearReleased: "2024",
            released: "Yes",
            imageURL:
            "images/twisters.png"
        },
        {
            movieTitle: "Wild Robot",
            yearReleased: "2024",
            released: "Yes",
            imageURL:
            "images/wildrobot.png"
        },
        // Add more movies objects here...
      ];

    const oldmovieLink = document.querySelector("#oldmovie");
    const newmovieLink = document.querySelector("#newmovie");

    if (oldmovieLink && newmovieLink) {
        oldmovieLink.addEventListener("click", (event) => {
            event.preventDefault();
            const oldMovies = movies.filter(movie => parseInt(movie.yearReleased) < 2025);
            createMovieCard(oldMovies);
        });

        newmovieLink.addEventListener("click", (event) => {
            event.preventDefault();
            const newMovies = movies.filter(movie => parseInt(movie.yearReleased) >= 2025);
            createMovieCard(newMovies);
        });
    } else {
        console.warn("Filter buttons not found in the document.");
    }

    function createMovieCard(filteredMovies) {
        const container = document.getElementById("movies-container");
        container.innerHTML = ""; // Clear existing content

        filteredMovies.forEach(movie => {
            const card = document.createElement("section");
            const name = document.createElement("h3");
            const year = document.createElement("p");
            const img = document.createElement("img");

            name.textContent = movie.movieTitle;
            year.textContent = `Year: ${movie.yearReleased}`;
            img.setAttribute("src", movie.imageURL);
            img.setAttribute("alt", `${movie.movieTitle} Poster`);

            card.appendChild(name);
            card.appendChild(year);
            card.appendChild(img);
            container.appendChild(card);
        });
    }

    // Load all movies by default
    createMovieCard(movies);
});