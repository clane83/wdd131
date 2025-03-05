const today = new Date();
let year = today.getFullYear();
document.getElementById("currentYear").innerHTML = year;


// const lastModified = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let modify = "Last Modification: " + month + "/" + day + "/" + year
document.getElementById("lastModified").innerHTML = modify;
