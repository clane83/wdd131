window.addEventListener("load", function() {
    let script = document.createElement("script");
    script.src = "heavy-script.js";
    document.body.appendChild(script);
});

document.getElementById("currentYear").innerHTML = new Date().getFullYear();
     
document.getElementById("lastModified").textContent = "Last Modification: " + new Date(document.lastModified).toLocaleString();
