const today = new Date();
let year = today.getFullYear();
document.getElementById("currentYear").innerHTML = year;

let lastModDate = new Date(document.lastModified);
        
let formattedDate = lastModDate.toLocaleString();
document.getElementById("lastModified").textContent = "Last Modification: " + formattedDate;
