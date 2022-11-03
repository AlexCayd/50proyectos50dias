const toggles = document.querySelectorAll(".toggle");
const bueno = document.querySelector('#bueno');
const barato = document.querySelector('#barato');
const rapido = document.querySelector('#rapido');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)));

function doTheTrick(theClickedOne) {
    if(bueno.checked && barato.checked && rapido.checked) {
        if(bueno === theClickedOne) {
            rapido.checked = false;
        }

        if(barato === theClickedOne) {
            bueno.checked = false;
        }

        if(rapido === theClickedOne) {
            barato.checked = false;
        }
    }
}