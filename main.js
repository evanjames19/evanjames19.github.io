let copyrightElement = document.getElementById("copyright");
let currentYear = new Date().getFullYear();
copyrightElement.innerHTML += " " + currentYear;

let greetingElement = document.getElementById("greeting");
let currentHour = new Date().getHours();
let greeting;
if (currentHour < 12) {
    greeting = "Good morning!";
} else if (currentHour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}
greetingElement.textContent = greeting;
