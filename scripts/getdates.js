document.getElementById("currentYear").innerHTML = new Date().getFullYear();
     
document.getElementById("lastModified").textContent = "Last Modification: " + new Date(document.lastModified).toLocaleString();

const blockedExtensions = ["extension1.js", "extension2.js"];
blockedExtensions.forEach(ext => {
    if (document.querySelector(`script[src*="${ext}"]`)) {
        console.warn("Blocked extension:", ext);
        document.querySelector(`script[src*="${ext}"]`).remove();
    }
});