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
            dateReleased: "May 30, 2025",
            released: "No",
            staffFavorites: "No",
            movieDescription: "After kung fu prodigy Li Fong relocates to New York City, he attracts unwanted attention from a local karate champion and embarks on a journey to enter the ultimate karate competition with the help of Mr. Han and Daniel LaRusso.",
            imageURL:
            "images/karatekidledgend.jpg"
        },
        {
            movieTitle: "King of Kings",
            dateReleased: "April 11, 2025",
            released: "No",
            staffFavorites: "No",
            movieDescription: "The story of our Lord Jesus Christ as told by Charles Dickens and seen through the innocent eyes of a child.",
            imageURL:
            "images/kingofkings.jpg"
        },
        {
            movieTitle: "Last Rodeo",
            dateReleased: "May 23, 2025",
            released: "No",
            staffFavorites: "No",
            movieDescription: "To save his grandson, a retired rodeo star enters a high-stakes bull-riding competition. Along the way, he confronts his past, discovers faith, and proves that true courage lies in family.",
            imageURL:
            "images/lastrodeo.jpg"
        },
        {
            movieTitle: "Lilo and Stitch",
            dateReleased: "May 23, 2025",
            released: "No",
            staffFavorites: "No",
            movieDescription: "A lonely Hawaiian girl befriends a runaway alien, helping to heal her fragmented family.",
            imageURL:
            "images/liloandstitch.jpeg"
        },
        {
            movieTitle: "Little Mermaid",
            dateReleased: "May 28, 2023",
            released: "Yes",
            staffFavorites: "No",
            movieDescription: "A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs so she can discover the world above water and impress a prince.",
            imageURL:
            "images/littlemermaid.jpg"
        },
        {
            movieTitle: "Moana 2",
            dateReleased: "December 1, 2024",
            released: "Yes",
            staffFavorites: "Yes",
            movieDescription: "After receiving an unexpected call from her wayfinding ancestors, Moana must journey to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
            imageURL:
            "images/moana2.jpg"
        },
        {
            movieTitle: "Mufasa: The Lion King",
            dateReleased: "December 22, 2024",
            released: "Yes",
            staffFavorites: "No",
            movieDescription: "Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.",
            imageURL:
            "images/mufasa.jpg"
        },
        {
            movieTitle: "Twisters",
            dateReleased: "July 21, 2024",
            released: "Yes",
            staffFavorites: "Yes",
            movieDescription: "Kate Carter, a retired tornado-chaser and meteorologist, is persuaded to return to Oklahoma to work with a new team and new technologies.",
            imageURL:
            "images/twisters.jpg"
        },
        {
            movieTitle: "Wild Robot",
            dateReleased: "September 29, 2024",
            movieDescription: "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
            released: "Yes",
            staffFavorites: "Yes",
            imageURL:
            "images/wildrobot.jpg"
        },
        {
            movieTitle: "A Minecraft Movie",
            dateReleased: "April 4, 2025",
            movieDescription: "Four misfits are suddenly pulled through a mysterious portal into a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a quest with an unexpected, expert crafter.",
            released: "Yes",
            staffFavorites: "No",
            imageURL:
            "images/minecraft.jpg"
        },
        {
            movieTitle: "Captain America: Brave New World",
            dateReleased: "February 16, 2025",
            movieDescription: "Sam Wilson, the new Captain America, finds himself in the middle of an international incident and must discover the motive behind a nefarious global plan.",
            released: "Yes",
            staffFavorites: "Yes",
            imageURL:
            "images/captain-america.jpg"
        }
        // Add more movies objects here...
      ];



    function createMovieCard(filteredMovies) {
        const container = document.getElementById("movies-container");
        if (!container) {
            console.error("Element with id movies-container not foudn in the DOM.");
        }
        
        container.innerHTML = ""; // Clear existing content

        

        filteredMovies.forEach(movie => {
            let card = document.createElement("section");
            card.classList.add("movie-card"); //adds class to the card
            const name = document.createElement("h3");
            const year = document.createElement("p");
            const description = document.createElement("p")
            const img = document.createElement("img");

            name.textContent = movie.movieTitle;
            year.innerHTML = `Date: ${movie.dateReleased}`;
            description.innerHTML = `Description: ${movie.movieDescription}`;
            img.setAttribute("src", movie.imageURL);
            img.setAttribute("alt", `${movie.movieTitle} Poster`);

            

            card.appendChild(name);
            card.appendChild(year);
            card.appendChild(description);
            card.appendChild(img);
            container.appendChild(card);

        });
    }

//coming soon movie container used on index.html

    function createComingSoonMovieCard(filteredMovies) {
        const container = document.getElementById("coming-soon-movies-container");
        if (container) {
        container.innerHTML = ""; // Clear existing content
        } else {
            console.error("Element with id 'coming-soon-movies-container' not found in the DOM.");

        }
        filteredMovies.forEach(movie => {
            let card = document.createElement("section");
            card.classList.add("coming-soon"); //adds class to the card
            const name = document.createElement("h3");
            const img = document.createElement("img");
            

            name.textContent = movie.movieTitle;
            img.setAttribute("src", movie.imageURL);
            img.setAttribute("alt", `${movie.movieTitle} Poster`);

            card.appendChild(name);
            card.appendChild(img);
            container.appendChild(card);

        });
    }

//recently released movie container used on index.html

    function createRecentMovieCard(filteredMovies) {
        const container = document.getElementById("recent-movies-container");
        container.innerHTML = ""; // Clear existing content

        

        filteredMovies.forEach(movie => {
            let card = document.createElement("section");
            card.classList.add("recent-movies"); //adds class to the card
            const name = document.createElement("h3");
            const img = document.createElement("img");
            

            name.textContent = movie.movieTitle;
            img.setAttribute("src", movie.imageURL);
            img.setAttribute("alt", `${movie.movieTitle} Poster`);

            card.appendChild(name);
            card.appendChild(img);
            container.appendChild(card);

        });
    }

//staff favorites movie container used on index.html

    function createFavoriteMovieCard(filteredMovies) {
        const container = document.getElementById("favorite-movies-container");
        container.innerHTML = ""; // Clear existing content

        

        filteredMovies.forEach(movie => {
            let card = document.createElement("section");
            card.classList.add("favorite-movies"); //adds class to the card
            const name = document.createElement("h3");
            const img = document.createElement("img");
            

            name.textContent = movie.movieTitle;
            img.setAttribute("src", movie.imageURL);
            img.setAttribute("alt", `${movie.movieTitle} Poster`);

            card.appendChild(name);
            card.appendChild(img);
            container.appendChild(card);

        });
    }

    
    
    // Check for filter query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get("filter");

    //check filter value and create movie cards based on old filter
    if (filter === "old") {
        const oldMovies = movies.filter(movie => parseInt(movie.dateReleased.split(" ")[2]) < 2025);
        createMovieCard(oldMovies);
    //check filter value and create movie cards based on new filter
    } else if (filter == "new") {
        const newMovies = movies.filter(movie => parseInt(movie.dateReleased.split(" ")[2]) >= 2025);
        createMovieCard(newMovies);
    } else if (filter == "comingsoon") {
        const comingSoonMovies = movies.filter(movie => movie.released == "No");
        createMovieCard(comingSoonMovies);
    } else if (filter == "recent"){
        const recentlyReleasedMovies = movies.filter(movie => parseInt(movie.dateReleased.split(" ")[2]) === 2025 && movie.released === "Yes");
        createMovieCard(recentlyReleasedMovies);
    
    } else if (filter == "favorite"){
        const recentlyReleasedMovies = movies.filter(movie => movie.staffFavorites === "Yes");
        createMovieCard(recentlyReleasedMovies);
    
    } else {
        // Load all movies by default if no filter is applied
        const moviesContainer = document.getElementById("movies-container");
        if (moviesContainer) {
            createMovieCard(movies);
        }
    }

    const comingSoonMovies = movies.filter(movie => movie.released == "No");
        createComingSoonMovieCard(comingSoonMovies);

    const recentMovies = movies.filter(movie => parseInt(movie.dateReleased.split(" ")[2]) === 2025 && movie.released === "Yes");
        createRecentMovieCard(recentMovies);

    const favoriteMovies = movies.filter(movie => movie.staffFavorites === "Yes");
        createFavoriteMovieCard(favoriteMovies);

    


});
