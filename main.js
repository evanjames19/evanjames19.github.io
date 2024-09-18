let dateTimeElement = document.getElementById("datetime");

function updateDateTime() {
    let now = new Date();
    dateTimeElement.textContent = "Current Date and Time: " + now.toLocaleString();
}
setInterval(updateDateTime, 1000);
