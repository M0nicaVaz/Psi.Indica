let abMonise = document.querySelector('#aboutMonise');
let moniseBtn = document.querySelector('#moniseBtn');
let logo = document.querySelector('.logo');
let closeBtn = document.querySelector('#closeBtn');

logo.addEventListener('mouseover', () => {
  logo.src = './Imagens/logo2.png';
});
logo.addEventListener('mouseout', () => {
  logo.src = './Imagens/logo.png';
});

moniseBtn.addEventListener('click', () => {
  abMonise.classList.toggle('hidden');
  console.log('click');
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  abMonise.classList.toggle('hidden');
  document.body.style.overflow = 'auto';
});
