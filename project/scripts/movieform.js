
document.addEventListener("DOMContentLoaded", () => {
    
const reasons = [
    { id: "1", name: "Movie has the wrong description"},
    { id: "2", name: "Movie has the wrong release date" },
    { id: "3", name: "Request to add a feature"},
    { id: "4", name: "Recommend a movie"},
    { id: "5", name: "Movie is not displaying correctly"},
    { id: "6", name: "Other"}
];
const reasonSelect = document.getElementById("reason");
if (reasonSelect) {
    reasons.forEach( reason => {
        const option = document.createElement("option");
        option.value = reason.id;
        option.textContent = reason.name;
        reasonSelect.appendChild(option);
    }); 
}else {
console.error("Element with id 'reason' not found in the DOM.");
}

  
});