const sky = document.querySelector('.sky');

document.body.addEventListener('click', addStar);

function addStar(event) {
    const star = document.createElement('i');
    star.setAttribute('class', 'fa fa-star');
    sky.appendChild(star);
}
