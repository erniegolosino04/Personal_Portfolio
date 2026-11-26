const track = document.querySelector('.track');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev')

let index = 0;

function update() {
    track.style.transform = `translate(-${index * 100}%)`;
}

nextBtn.addEventListener('click', function () {
    index = (index + 1) % slides.length;
    update();
})

prevBtn.addEventListener('click', function () {
    index = (index - 1 + slides.length) % slides.length;
    update();
})



// OPEN CONTACT POPUP
const contactModal = document.getElementById("contactModal");
const openContact = document.getElementById("openContact");
const closeContact = document.getElementById("closeContact");

openContact.addEventListener("click", () => {
    contactModal.classList.add("active");
    document.body.style.overflow = "hidden";
});

// CLOSE CONTACT POPUP
closeContact.addEventListener("click", () => {
    contactModal.classList.remove("active");
    document.body.style.overflow = "auto";
});

// CLOSE WHEN CLICKING OUTSIDE
contactModal.addEventListener("click", (e) => {
    if (e.target === contactModal) {
        contactModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});

// CLOSE USING ESCAPE KEY
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        contactModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});
