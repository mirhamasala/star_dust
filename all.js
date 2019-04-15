const message = document.querySelector('.message');
const button = document.querySelector('button');
const sky = document.querySelector('.sky');
let inPlay = false;

messenger("Hit the start button..");

button.addEventListener('click', function() {
    if (!inPlay) {
        inPlay = true;
        button.style.display = "none";
        messenger("Turn the stars to dust as quickly as you can!");
    }
})

function messenger(mes) {
    message.innerHTML = mes;
}

// const star = document.querySelector('.fa-star');
// const sky = document.querySelector('.sky');

// sky.addEventListener('click', handleClick, false);

// function handleClick(event) {
//     star.classList.remove('glow');
//     star.style.fontSize = `${Math.floor((Math.random() * 65) + 25)}px`;
//     moveStar(event);
//     addGlow();
// }

// function moveStar(event) {
//     let xPosition = event.clientX - (star.offsetWidth / 2);
//     let yPosition = event.clientY - (star.offsetHeight / 2);
//     star.style.transform = `translate3d(${xPosition}px, ${yPosition}px, 0)`;
// }

// function addGlow() {
//     star.classList.add('glow');
// }
