const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');
const person =[
    'brook',
    'chopper',
    'franky',
    'jinbei',
    'luffy',
    'nami',
    'robin 2',
    'Usoop',
    'sanji',
    'zoro',   
]

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disableCards = document.querySelectorAll('.disable-card');
    if (disableCards.length == 20) {
        clearInterval(this.loop);
        alert(`GOMU GOMU NOO, VITORY!!!, ${spanPlayer.innerHTML} Seu tempo foi: ${timer.innerHTML}`);
    }
}

const checkCards = () => {
const firstperson = firstCard.getAttribute('data-character');
const secondperson = secondCard.getAttribute('data-character');

if (firstperson == secondperson) {

    firstCard.firstChild.classList.add('disable-card');
    secondCard.firstChild.classList.add('disable-card');
    
    firstCard= '';
     secondCard= '';

 checkEndGame();

}else{
    
    setTimeout(() => {
        
    firstCard.classList.remove('reveal-card');
    secondCard.classList.remove('reveal-card');
    
    firstCard= '';
     secondCard= '';

  },500);
}

}
const revealCard= ({target}) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }
    
    if (firstCard === '') {
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;

    }else if (secondCard === '') {
    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

checkCards();

    }

}

const createCard = (person) => {
    const card = createElement('div','card');
    const front= createElement('div','face front');
    const back = createElement('div','face back');

 front.style.backgroundImage = `url('../../js/imagens/${person}.jpeg.jpg')`
   
 card.appendChild(front);
 card.appendChild(back);

 card.addEventListener('click',revealCard)
 card.setAttribute('data-character', person)
 
 return card;

}
 
const loadGame = () => {   
const duplicatePerson = [...person, ...person ];

const shuffledArray = duplicatePerson.sort(()=> Math.random() -0.5);

shuffledArray.forEach((person)=> {
    const card = createCard(person);
    grid.appendChild(card);
   
});
}

const startTimer = () => {
   
 this.loop = setInterval(() => {
    const currentTimer = +timer.innerHTML;
    timer.innerHTML = currentTimer + 1;

}, 1000);
}
window.onload = () =>{
    spanPlayer.innerHTML = localStorage.getItem('player')
    startTimer();
    loadGame();

    
}

// Restart Game
function restartGame() {
    
    window.location.reload();
}

document.getElementById('restartButton').addEventListener('click', restartGame);

