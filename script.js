
const languages = [
    "Em breve",
    "Coming soon",
    "Próximamente"
];

let currentLanguage = 0;

const message = document.getElementById("message");

function changeLanguage(direction) {
    currentLanguage = (currentLanguage + direction + languages.length) % languages.length;

    message.style.opacity = 0;

    setTimeout(() => {
        message.textContent = languages[currentLanguage];
        message.style.opacity = 1;
    }, 250);
}

document.getElementById("prev").addEventListener("click", () => {
    changeLanguage(-1);
});

document.getElementById("next").addEventListener("click", () => {
    changeLanguage(1);
});
