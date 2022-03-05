let openModal = document.querySelector('#open-modal');
let cardDanilo = document.querySelectorAll('.flipCard')[0];
let cardManu = document.querySelectorAll('.flipCard')[1];
let cardMonica = document.querySelectorAll('.flipCard')[2];
let cardMonise = document.querySelectorAll('.flipCard')[3];

let modalClosed = true;

openModal.addEventListener('click', () => {
  let modal = document.querySelector('.modal');
  let footer = document.querySelector('.footer-wrapper');

  if (modalClosed) {
    modal.classList.toggle('hidden');
    document.body.style.overflow = 'hidden';
    footer.style.position = 'fixed';
    modalClosed = false;

    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('close')) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        footer.style.position = 'relative';
        modalClosed = true;
      }
    });
  }
});

function flip() {}

cardDanilo.addEventListener('click', () => {});
