let card1 = document.querySelectorAll('.card')[0];
let card2 = document.querySelectorAll('.card')[1];
let card3 = document.querySelectorAll('.card')[2];
let card4 = document.querySelectorAll('.card')[3];

let logo = document.querySelector('.logo');

logo.addEventListener('mouseover', () => {
  logo.src = './Imagens/logo2.png';
});
logo.addEventListener('mouseout', () => {
  logo.src = './Imagens/logo.png';
});

function changeCard() {
  this.style.background = 'white';
}
function undoCard() {
  this.style.background = '#caa6ff38';
}

card1.addEventListener('mouseover', () => {
  changeCard();
});
card1.addEventListener('mouseout', () => {
  undoCard();
});
