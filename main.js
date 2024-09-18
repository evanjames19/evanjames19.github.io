let dateTimeElement = document.getElementById("datetime");

function updateDateTime() {
    let now = new Date();
    dateTimeElement.textContent = "Current Date and Time: " + now.toLocaleString();
}
setInterval(updateDateTime, 1000);

// Dynamic background color gradient on scroll
window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    let scrollPercentage = scrollPosition / maxScroll;
    
    document.body.style.background = `linear-gradient(to bottom, #4CAF50, #FFC107 ${scrollPercentage * 100}%, #FF5722)`;
});
