const star = document.querySelector('.fa-star');
const sky = document.querySelector('.sky');

sky.addEventListener('click', handleClick, false);

function handleClick(event) {
    star.classList.remove('glow');
    star.style.fontSize = `${Math.floor((Math.random() * 65) + 25)}px`;
    moveStar(event);
    addGlow();
}

function moveStar(event) {
    let xPosition = event.clientX - (star.offsetWidth / 2);
    let yPosition = event.clientY - (star.offsetHeight / 2);
    star.style.transform = `translate3d(${xPosition}px, ${yPosition}px, 0)`;
}

function addGlow() {
    star.classList.add('glow');
}
