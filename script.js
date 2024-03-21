const burgerInput = document.getElementById('burger');
const nav = document.getElementById('nav');
const colectionText = document.getElementById('colectionText');
const switchColectionBtn = document.getElementById('switch-colection-btn');
let infantil = true;

function start() {
    switchColection();
}

function SwitchNav() {
    if(burgerInput.checked) {
        if(nav.classList.contains('hideNav')) {
            nav.classList.remove('hideNav');
        }
        nav.classList.add('showNav');
    } else {
        if(nav.classList.contains('showNav')) {
            nav.classList.remove('showNav');
        }
        nav.classList.add('hideNav');
    }
}

function switchColection() {
    infantil = !infantil;
    if(infantil) {
        if(colectionText.classList.contains('text-detail')){
            colectionText.classList.remove('text-detail');
        }
        colectionText.classList.add('teenText');
        colectionText.innerHTML = 'Infantil';
        switchColectionBtn.innerHTML = 'Adulto';
    } else {
        if(colectionText.classList.contains('teenText')){
            colectionText.classList.remove('teenText');
        }
        colectionText.classList.add('text-detail');
        colectionText.innerHTML = 'Adulto';
        switchColectionBtn.innerHTML ='Infantil';
    }
    console.log(infantil);
}

document.addEventListener('mousedown', (event) => {
    if(burgerInput.checked) {
        if(!nav.contains(event.target) && !event.target.closest('.burger')) {
            burgerInput.checked = false;
            SwitchNav();
        }
    }
});

switchColectionBtn.addEventListener('click', switchColection);
burgerInput.addEventListener('change', SwitchNav);