const buscar = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    buscar.classList.toggle('active');
    input.focus();
})