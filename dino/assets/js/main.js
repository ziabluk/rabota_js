const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', function(event){
    jump();
});

function jump(){
    if (dino.classList != 'jump'){
        dino.classList.add('jump');
    }

    setTimeout(function() {
        dino.classList.remove('jump')

    }, 600)
    
}; 


let isCount =- setInterval( function() {
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 47) {
        document.querySelector('#count').innerHTML = +document.querySelector('#count').innerHTML + 1 

    }
},
1000)


let isAlive = setInterval( function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    // console.log(cactusLeft, dinoTop)
    if (cactusLeft < 46 && cactusLeft > 0 && dinoTop >= 125){
        alert('Game over');
        document.querySelector('#count').innerHTML = 0;
    }
    // else if (cactusLeft < 47) {
    //     console.log(document.querySelector('#count').innerHTML)
    //     document.querySelector('#count').innerHTML = +document.querySelector('#count').innerHTML + 1 
    //     console.log(+document.querySelector('#count').innerHTML)
    // }
}, 10)