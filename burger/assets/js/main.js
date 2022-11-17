const linkItem = document.getElementsByClassName('header__burger')[0];
linkItem.addEventListener('click', function(e){
    linkItem.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.body.classList.toggle('lock');
})

document.querySelectorAll('.header__link').forEach(elem => {
    elem.addEventListener('click', () => {
        linkItem.classList.toggle('active');
        document.querySelector('.header__menu').classList.toggle('active');
        document.body.classList.toggle('lock');
    })
})