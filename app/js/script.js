let openModal = document.querySelector('#open-modal');
let cards = document.querySelectorAll('.flipCard');
let modalClosed = true;

openModal.addEventListener('click', () => {
  let modal = document.querySelector('.modal');
  let form = document.querySelector('#mc-embedded-subscribe-form');

  if (modalClosed) {
    modal.classList.toggle('hidden');
    document.body.style.overflow = 'hidden';
    form.previousElementSibling.innerHTML = `Entre em contato com a gente:`;
    form.style.display = 'flex';
    modalClosed = false;

    form.addEventListener('submit', () => {
      form.previousElementSibling.innerHTML = `Obrigada! <br> Responderemos assim que possível 💛`;
      form.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('close')) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        modalClosed = true;
      }
    });
  }
});

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', (e) => {
    let flipCard = e.target.parentElement.parentElement;

    if (e.target.classList.contains('frontR')) {
      flipCard.style.transform = 'rotateY(180deg)';
    } else if (e.target.classList.contains('backR')) {
      flipCard.style.transform = 'rotateY(0deg)';
    }
  });
}
