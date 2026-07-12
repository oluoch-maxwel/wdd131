const humButton = document.querySelector(".hum-button");
const navLinks = document.querySelector(".nav-links");

humButton.addEventListener("click", () => {
    humButton.classList.toggle("show");
    navLinks.classList.toggle("show");
});
// humButton.textContent = humButton.classList.contains("show") ? "✕" : "☰";


const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = `© ${currentYear}`;

document.getElementById("lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

