document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentYear").innerHTML = new Date().getFullYear();     
    document.getElementById("lastModified").textContent = "Last Modification: " + new Date(document.lastModified).toLocaleString();

    const hamButton = document.querySelector("#menu");
    const navigation = document.querySelector(".navigation");

    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");
    });

    const movies = [
        {
            movieTitle: "Karate Kid Legends",
            yearReleased: "2025",
            released: "No",
            movieDescription: "After kung fu prodigy Li Fong relocates to New York City, he attracts unwanted attention from a local karate champion and embarks on a journey to enter the ultimate karate competition with the help of Mr. Han and Daniel LaRusso.",
            imageURL:
            "images/karatekidledgend.jpg"
        },
        {
            movieTitle: "King of Kings",
            yearReleased: "2025",
            released: "No",
            movieDescription: "The story of our Lord Jesus Christ as told by Charles Dickens and seen through the innocent eyes of a child.",
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
            movieDescription: "A lonely Hawaiian girl befriends a runaway alien, helping to heal her fragmented family.",
            imageURL:
            "images/liloandstitch.jpeg"
        },
        {
            movieTitle: "Little Mermaid",
            yearReleased: "2023",
            released: "Yes",
            movieDescription: "A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs so she can discover the world above water and impress a prince.",
            imageURL:
            "images/littlemermaid.jpg"
        },
        {
            movieTitle: "Moana 2",
            yearReleased: "2025",
            released: "Yes",
            movieDescription: "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
            imageURL:
            "images/moana2.jpg"
        },
        {
            movieTitle: "Mufasa",
            yearReleased: "2024",
            released: "Yes",
            movieDescription: "Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.",
            imageURL:
            "images/mufasa.jpg"
        },
        {
            movieTitle: "Twisters",
            yearReleased: "2024",
            released: "Yes",
            movieDescription: "Kate Carter, a retired tornado-chaser and meteorologist, is persuaded to return to Oklahoma to work with a new team and new technologies.",
            imageURL:
            "images/twisters.jpg"
        },
        {
            movieTitle: "Wild Robot",
            yearReleased: "2024",
            movieDescription: "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
            released: "Yes",
            imageURL:
            "images/wildrobot.jpg"
        },
        // Add more movies objects here...
      ];



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
            year.innerHTML = `Year: ${movie.yearReleased}`;
            description.innerHTML = `Description: ${movie.movieDescription}`;
            img.setAttribute("src", movie.imageURL);
            img.setAttribute("alt", `${movie.movieTitle} Poster`);



            //creat textarea and button
            textarea.placeholder = "Write your review here...";
            textarea.rows = 5;
            textarea.cols = 30;
            
            button.textContent = "Complete Review";
            

            card.appendChild(name);
            card.appendChild(year);
            card.appendChild(description);
            card.appendChild(img);
            card.appendChild(textarea);
            card.appendChild(button);
            container.appendChild(card);

        });
    }

    
    
    // Check for filter query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get("filter");

    //check filter value and create movie cards based on old filter
    if (filter === "old") {
        const oldMovies = movies.filter(movie => parseInt(movie.yearReleased) < 2025);
        createMovieCard(oldMovies);
    //check filter value and create movie cards based on new filter
    } else if (filter == "new") {
        const newMovies = movies.filter(movie => parseInt(movie.yearReleased) >= 2025);
        createMovieCard(newMovies);
    } else {
        // Load all movies by default if no filter is applied
        const moviesContainer = document.getElementById("movies-container");
        if (moviesContainer) {
            createMovieCard(movies);
        }
    }
});