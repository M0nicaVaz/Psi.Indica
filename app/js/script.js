let openContactModal = document.querySelector('#contactBtn');
let openProjectModal = document.querySelector('#projectBtn');
let staffCards = document.querySelectorAll('.flipCard');
// project modal
let container = document.querySelector('#mediaContainer');
let selectChoice = document.querySelector('#choices');

let modalClosed = true;

openProjectModal.addEventListener('click', () => {
  let modal = document.querySelector('#project-modal');

  if (modalClosed) {
    modal.classList.toggle('hidden');
    document.body.style.overflow = 'hidden';
    modalClosed = false;

    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('close')) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        modalClosed = true;
      }
    });
  }
});

openContactModal.addEventListener('click', () => {
  let modal = document.querySelector('#contact-modal');

  if (modalClosed) {
    modal.classList.toggle('hidden');
    document.body.style.overflow = 'hidden';
    modalClosed = false;

    modal.addEventListener('click', (e) => {
      if (e.target.classList.contains('close')) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        modalClosed = true;
      }
    });
  }
});

(function generateStaffCards() {
  for (var i = 0; i < staffCards.length; i++) {
    staffCards[i].addEventListener('click', (e) => {
      let flipCard = e.target.parentElement.parentElement;

      if (e.target.classList.contains('frontR')) {
        flipCard.style.transform = 'rotateY(180deg)';
      } else if (e.target.classList.contains('backR')) {
        flipCard.style.transform = 'rotateY(0deg)';
      }
    });
  }
})();

function createSingleCard(obj) {
  let card = document.createElement('div');
  card.classList.add('media-card');
  container.appendChild(card);

  let h3 = document.createElement('h3');
  let title = document.createTextNode(obj.title);
  h3.appendChild(title);
  card.appendChild(h3);

  let cardImg = document.createElement('img');
  cardImg.classList.add('card-img');
  cardImg.src = obj.imgSrc;
  cardImg.alt = `${obj.title} ${obj.type}`;
  card.appendChild(cardImg);

  let btn = document.createElement('a');
  btn.classList.add('btn');
  let post = document.createTextNode('Leia o nosso post!');
  btn.appendChild(post);
  btn.href = obj.postUrl;
  card.appendChild(btn);
}

function createRandomCard() {
  let randomIndex = Math.floor(Math.random() * randomMedia.length);
  let randomOption = randomMedia[randomIndex];
  createSingleCard(randomOption);
}

function createMultipleCards(array) {
  array.forEach((obj) => {
    createSingleCard(obj);
  });
}

selectChoice.addEventListener('change', () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  let chosen = selectChoice.value;

  switch (chosen) {
    case 'animes':
      createMultipleCards(animeList);
      break;

    case 'movies':
      createMultipleCards(moviesList);
      break;

    case 'series':
      createMultipleCards(seriesList);
      break;

    case 'random':
      createRandomCard();
      break;
  }
});
