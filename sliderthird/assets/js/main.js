const btnRight = document.querySelector(".btnRight");
const btnLeft = document.querySelector('.btnLeft')
let slides = document.querySelectorAll("img");
let i = 0;


btnRight.addEventListener('click', event => {
    
    ++i;
    if (i == slides.length) {
        slides[i-1].classList.add('block');
        return;
    }

    if (i > slides.length) {
        i--;
        return; 
    }

    
    slides[i].classList.add("block");
    if (i != 0) {
        slides[i-1].classList.add("block");
    }
});

btnLeft.addEventListener('click', event => {
    if (i == 0) {return;}
    slides[i].classList.remove('block');
    i--;
});





