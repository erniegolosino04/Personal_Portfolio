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
