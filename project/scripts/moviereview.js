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
            movieDescription: "",
            imageURL:
            "images/karatekidledgend.jpg"
        },
        {
            movieTitle: "King of Kings",
            yearReleased: "2025",
            released: "No",
            movieDescription: "",
            imageURL:
            "images/kingofkings.jpg"
        },
        {
            movieTitle: "Last Rodeo",
            yearReleased: "2025",
            released: "No",
            movieDescription: "To save his grandson, a retired rodeo star enters a high-stakes bull-riding competition. Along the way, he confronts his past, discovers faith, and proves that true courage lies in family.",
            imageURL:
            "images/lastrodeo.jpg"
        },
        {
            movieTitle: "Lilo and Stitch",
            yearReleased: "2025",
            released: "No",
            movieDescription: "",
            imageURL:
            "images/liloandstitch.jpeg"
        },
        {
            movieTitle: "Little Mermaid",
            yearReleased: "2023",
            released: "Yes",
            movieDescription: "",
            imageURL:
            "images/littlemermaid.jpg"
        },
        {
            movieTitle: "Moana 2",
            yearReleased: "2025",
            released: "Yes",
            movieDescription: "",
            imageURL:
            "images/moana2.jpg"
        },
        {
            movieTitle: "Mufasa",
            yearReleased: "2024",
            released: "Yes",
            movieDescription: "",
            imageURL:
            "images/mufasa.png"
        },
        {
            movieTitle: "Twisters",
            yearReleased: "2024",
            released: "Yes",
            movieDescription: "",
            imageURL:
            "images/twisters.png"
        },
        {
            movieTitle: "Wild Robot",
            yearReleased: "2024",
            movieDescription: "",
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
            let card = document.createElement("section");
            card.classList.add("movie-card"); //adds class to the card
            const name = document.createElement("h3");
            const year = document.createElement("p");
            const description = document.createElement("p")
            const img = document.createElement("img");
            const textarea = document.createElement("textarea");
            const button = document.createElement("button");

            name.textContent = movie.movieTitle;
            year.textContent = `Year: ${movie.yearReleased}`;
            description.textContent = `Description: ${movie.movieDescription}`;
            img.setAttribute("src", movie.imageURL);
            img.setAttribute("alt", `${movie.movieTitle} Poster`);



            //creat textarea and button
            textarea.placeholder = "Write your review here...";
            textarea.rows = 5;
            textarea.cols = 30;
            

            

            card.appendChild(name);
            card.appendChild(year);
            card.appendChild(description);
            card.appendChild(img);
            card.appendChild(textarea);
            card.appendChild(button);
            container.appendChild(card);

        });
    }

    // Load all movies by default
    createMovieCard(movies);
});