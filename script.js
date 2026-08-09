/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 4000);

});



/* ==========================================
   TYPEWRITER LETTER
========================================== */

const birthdayMessage = `🤍 Happy Birthday, My Dearest Sister!

Today is all about celebrating the wonderful person you are.

Watching you grow into such a kind, strong, and beautiful person has been one of the greatest joys of my life.

No matter how much time passes,
you’ll always hold a special place in my heart.

May your heart always be filled with happiness,
your dreams come true,
and your smile never fade.

Happy Birthday, Princess. 💖👑`;

const typingText = document.getElementById("typingText");

let index = 0;

function typeWriter() {

    if (!typingText) return;

    if (index < birthdayMessage.length) {

        typingText.innerHTML += birthdayMessage.charAt(index);

        index++;

        setTimeout(typeWriter, 35);

    }

}



/* ==========================================
   REVEAL BUTTON
========================================== */

const revealBtn = document.getElementById("revealBtn");

if (revealBtn) {

    revealBtn.addEventListener("click", () => {

        startMusic();

        document.querySelector(".intro").scrollIntoView({

            behavior: "smooth"

        });

        if (typingText.innerHTML === "") {

            typeWriter();

        }

    });

}



/* ==========================================
   SCROLL REVEAL
========================================== */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

hiddenElements.forEach(element => {

    observer.observe(element);

});



/* ==========================================
   SCROLL TO TOP
========================================== */

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show");

    }

    else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";

    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.animation = `heartFloat ${5 + Math.random() * 4}s linear forwards`;

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 700);



/* ==========================================
   FALLING FLOWERS
========================================== */

function createFlower() {

    const flower = document.createElement("div");

    flower.innerHTML = "🌸";

    flower.className = "flower";

    flower.style.left = Math.random() * window.innerWidth + "px";

    flower.style.animationDuration = (6 + Math.random() * 4) + "s";

    document.body.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 10000);

}

setInterval(createFlower, 1200);



/* ==========================================
   SHOOTING STAR
========================================== */

function shootingStar() {

    const star = document.createElement("div");

    star.className = "shooting-star";

    star.style.top = Math.random() * 300 + "px";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 2500);

}

setInterval(shootingStar, 6000);



/* ==========================================
   HEART ANIMATION
========================================== */

const style = document.createElement("style");

style.innerHTML = `

@keyframes heartFloat{

0%{

transform:translateY(0) scale(1);

opacity:1;

}

100%{

transform:translateY(-120vh) scale(1.8);

opacity:0;

}

}

`;

document.head.appendChild(style);

/* ==========================================
   CUSTOM CURSOR
========================================== */

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {

    if (!cursorDot || !cursorOutline) return;

    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";

    cursorOutline.style.left = (e.clientX - 17) + "px";
    cursorOutline.style.top = (e.clientY - 17) + "px";

});



/* ==========================================
   GIFT BOX
========================================== */

const giftButton = document.getElementById("openGift");

const giftMessage = document.querySelector(".gift-message");

const giftBox = document.getElementById("giftBox");

if (giftButton) {

    giftButton.addEventListener("click", () => {

        giftBox.style.transform = "scale(1.15) rotate(5deg)";

        giftBox.style.transition = ".6s";

        giftMessage.classList.remove("hidden");

        giftMessage.classList.add("show");

        giftMessage.scrollIntoView({

            behavior: "smooth"

        });

    });

}



/* ==========================================
   GALLERY IMAGE POPUP
========================================== */

const images = document.querySelectorAll(".photo-card img");

const popup = document.createElement("div");

popup.style.position = "fixed";
popup.style.left = "0";
popup.style.top = "0";
popup.style.width = "100%";
popup.style.height = "100%";
popup.style.background = "rgba(0,0,0,.9)";
popup.style.display = "none";
popup.style.justifyContent = "center";
popup.style.alignItems = "center";
popup.style.zIndex = "999999";

const popupImage = document.createElement("img");

popupImage.style.maxWidth = "90%";
popupImage.style.maxHeight = "90%";
popupImage.style.borderRadius = "20px";
popupImage.style.boxShadow = "0 0 40px rgba(255,255,255,.3)";

popup.appendChild(popupImage);

document.body.appendChild(popup);

images.forEach((img) => {

    img.addEventListener("click", () => {

        popup.style.display = "flex";

        popupImage.src = img.src;

    });

});

popup.addEventListener("click", () => {

    popup.style.display = "none";

});



/* ==========================================
   REVEAL BUTTON GLOW
========================================== */

setInterval(() => {

    if (!revealBtn) return;

    revealBtn.animate(

        [

            {

                transform: "scale(1)"

            },

            {

                transform: "scale(1.08)"

            },

            {

                transform: "scale(1)"

            }

        ],

        {

            duration: 2000

        }

    );

}, 2500);



/* ==========================================
   FINAL MESSAGE EFFECT
========================================== */

const ending = document.querySelector(".ending-card");

window.addEventListener("scroll", () => {

    if (!ending) return;

    const position = ending.getBoundingClientRect().top;

    if (position < window.innerHeight - 120) {

        ending.animate(

            [

                {

                    opacity: 0,

                    transform: "translateY(80px)"

                },

                {

                    opacity: 1,

                    transform: "translateY(0)"

                }

            ],

            {

                duration: 1500,

                fill: "forwards"

            }

        );

    }

});


/* ================= MUSIC PLAYER ================= */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");
const musicIcon = document.getElementById("musicIcon");

let isMusicPlaying = false;


/* PLAY MUSIC */

function startMusic() {

    music.volume = 0.7;

    music.play()
        .then(() => {

            isMusicPlaying = true;

            musicIcon.textContent = "🔊";
            musicBtn.classList.add("playing");

        })
        .catch((error) => {

            console.log("Music could not start:", error);

        });
}


/* PAUSE / RESUME BUTTON */

musicBtn.addEventListener("click", () => {

    if (isMusicPlaying) {

        music.pause();

        isMusicPlaying = false;

        musicIcon.textContent = "🎵";
        musicBtn.classList.remove("playing");

    } else {

        startMusic();

    }

});
