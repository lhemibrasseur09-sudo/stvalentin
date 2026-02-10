const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");

// 💥 Bouton NON qui s'enfuit
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// 💌 Clique sur OUI
yesBtn.addEventListener("click", () => {
    // Affiche le message
    message.classList.remove("hidden");

    // Affiche l'image
    const photo = document.getElementById("photo");
    photo.classList.remove("hidden");

    // Crée les cœurs
    createHearts();
})


// 💖 Pluie de cœurs
function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration = (Math.random() * 2 + 2) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}