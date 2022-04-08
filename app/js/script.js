let openContactModal = document.querySelector('#contactBtn');
let openProjectModal = document.querySelector('#projectBtn');
let staffCards = document.querySelectorAll('.flipCard');
// project modal
let container = document.querySelector('#mediaContainer');
let selectChoice = document.querySelector('#choices');

let modalClosed = true;

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

function createCards(obj) {
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
  cardImg.alt = `${obj.title} ${obj.type} cover`;
  card.appendChild(cardImg);

  let linkElement = document.createElement('a');
  linkElement.classList.add('btn');
  let post = document.createTextNode('Leia o nosso post!');
  linkElement.appendChild(post);
  linkElement.href = obj.postUrl;
  linkElement.target = '_blank';
  card.appendChild(linkElement);
}

selectChoice.addEventListener('change', () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const animeList = allMedia.filter((media) => media.type == 'anime');
  const movieList = allMedia.filter((media) => media.type == 'movie');
  const seriesList = allMedia.filter((media) => media.type == 'series');

  let chosen = selectChoice.value;

  switch (chosen) {
    case 'animes':
      animeList.forEach((obj) => {
        createCards(obj);
      });

      break;

    case 'movies':
      movieList.forEach((obj) => {
        createCards(obj);
      });

      break;

    case 'series':
      seriesList.forEach((obj) => {
        createCards(obj);
      });

      break;

    case 'random':
      let randomIndex = Math.floor(Math.random() * allMedia.length);
      let randomOption = allMedia[randomIndex];
      createCards(randomOption);

      break;
  }
});
