// script.js
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('mouseover', () => {
        star.style.animation = 'dance 3s infinite ease-in-out, changeColor 2s infinite alternate, starTrail 1s infinite';
    });

    star.addEventListener('mouseout', () => {
        star.style.animation = 'dance 3s infinite ease-in-out, changeColor 2s infinite alternate';
    });
});