const message = document.querySelector('.message');
const button = document.querySelector('button');
const sky = document.querySelector('.sky');
let inPlay = false;
let playArea = {};
let start;

messenger("Hit the start button..");

button.addEventListener('click', function() {
    if (!inPlay) {
        inPlay = true;
        button.style.display = "none";
        messenger("Turn the stars to dust as quickly as you can!");
        showStar();
    }
})

function messenger(mes) {
    message.innerHTML = mes;
}

function showStar() {
    start = new Date().getTime();
    playArea.timer = setTimeout(myBox, rand(2000));
}

function myBox() {
    let el = document.createElement("i");
    el.setAttribute('class', 'fas fa-star');
    sky.appendChild(el);
    el.style.top = `${rand(150)}px`;
    el.style.left = `${rand(100)}px`;
    el.style.fontSize = `${rand(100) + 15}px`
}

function rand(num) {
    let tempVal = Math.floor(Math.random() * num);
    return tempVal;
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
