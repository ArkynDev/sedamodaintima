const burgerInput = document.getElementById('burger');
const nav = document.getElementById('nav');
const colectionText = document.getElementById('colectionText');
const switchColectionBtn = document.getElementById('switch-colection-btn');
const catalog = document.getElementById('catalog-container');
let infantil = true;

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
}

function toSection() {
    burgerInput.checked = false;
    SwitchNav();
}

function getData() {
    axios.get ('https://script.google.com/macros/s/AKfycbw5xDBCP4bcbT8qzvG9Hq_j2HQRuK5aQ6B62Tz9sacMD2zPxCdB-tdaWWDQXEAemdjI/exec')
    .then((Response) => {
        data = Response.data;
        console.log(data.data);

        console.log(data.Img);

        data.data.forEach(item => {
            const i = item;

            const card = document.createElement('div');
            card.classList.add('catalog-card');

            const img = document.createElement('img');
            img.src = item.Img;

            catalog.appendChild(card);
            card.append(img);
        });
    })
    .catch((error) => console.error(error));
}


window.addEventListener('load', (event) => {
    switchColection();
});

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