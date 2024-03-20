const burgerInput = document.getElementById('burger');
const nav = document.getElementById('nav');

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

document.addEventListener('mousedown', (event) => {
    if(burgerInput.checked) {
        if(!nav.contains(event.target) && !event.target.closest('.burger')) {
            burgerInput.checked = false;
            SwitchNav();
        }
    }
});

burgerInput.addEventListener('change', SwitchNav);