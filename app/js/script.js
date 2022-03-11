let openContactModal = document.querySelector('#contactBtn');
let openProjectModal = document.querySelector('#projectBtn');
let staffCards = document.querySelectorAll('.flipCard');
// project modal
let container = document.querySelector('#mediaContainer');
let selectChoice = document.querySelector('#choices');

let modalClosed = true;

openProjectModal.addEventListener('click', () => {
  let modal = document.querySelector('#project-modal');
  console.log('click');

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
  card.appendChild(cardImg);

  let btn = document.createElement('a');
  btn.classList.add('btn');
  let post = document.createTextNode('Leia o nosso post!');
  btn.appendChild(post);
  btn.href = obj.postUrl;
  card.appendChild(btn);
}

function optionRandom() {
  let chooseGenre = Math.floor(Math.random() * allMedia.length);
  let randomGenre = allMedia[chooseGenre];
  let randomChoice = Math.floor(Math.random() * randomGenre.length);
  let surpriseCard = randomGenre[randomChoice];
  createCards(surpriseCard);
}

selectChoice.addEventListener('change', () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  if (selectChoice.value == 'animes') {
    animeList.forEach((obj) => {
      createCards(obj);
    });
  } else if (selectChoice.value == 'movies') {
    moviesList.forEach((obj) => {
      createCards(obj);
    });
  } else if (selectChoice.value == 'series') {
    seriesList.forEach((obj) => {
      createCards(obj);
    });
  } else {
    optionRandom();
  }
});
