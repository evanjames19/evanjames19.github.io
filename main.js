let copyrightElement = document.getElementById("copyright");
let currentYear = new Date().getFullYear();
copyrightElement.innerHTML += " " + currentYear;

let dateTimeElement = document.getElementById("datetime");

function updateDateTime() {
    let now = new Date();
    dateTimeElement.textContent = now.toLocaleString();
}

setInterval(updateDateTime, 1000);
