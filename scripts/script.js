const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },
});


const modal = document.getElementById("myModal");
  const btn = document.getElementById("openModal");
  const span = document.getElementsByClassName("modal__close")[0];
  const okButton = document.getElementById("okButton");
  const cancelButton = document.getElementById("cancelButton");

  btn.onclick = function() {
      modal.style.display = "block";
      document.body.style.overflow = "hidden"; // Отключаем скролл
  }

  span.onclick = function() {
      closeModal();
  }

  okButton.onclick = function() {
      closeModal();
  }

  cancelButton.onclick = function() {
      closeModal();
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          closeModal();
      }
  }

  function closeModal() {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Включаем скролл
  }


  //Прелоадер
  window.onload = function() {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none'; // Скрыть прелоадер
        document.body.style.display = 'block'; // Показать содержимое сайта
    }, 1500);
};


/*const cards = {
    card1: {
        id: "1",
        text: "I can always find what I'm looking for in Splice, whether it's the exact sound I want or just a bit of inspiration.",
        img: "img/review1.png",
        author: "Andrew Huang",
        artist: "Artist",
    },
    card2: {
        id: "2",
        text: "Finally a way to buy plugins that works. By paying a little at a time, producers can get legit access to the top VSTs.",
        img: "img/review2.png",
        author: "KSHMR",
        artist: "Artist",
    },
    card3: {
        id: "3",
        text: "It's been fun to dive into Splicer's creator community and explore tools that support my own creative process.",
        img: "img/review3.png",
        author: "Kesha Lee",
        artist: "Artist",
    },
    card4: {
        id: "4",
        text: "I can always find what I'm looking for in Splice, whether it's the exact sound I want or just a bit of inspiration.",
        img: "img/review1.png",
        author: "Andrew Huang",
        artist: "Artist",
    },
};*/

/*function showCard(card) {
    return `
        <div class="cards__review-${card.id}">
            <p class="review__text">${card.text}</p>
            <div class="review__author">
                <img src="${card.img}" class="review__img">
                <div class="author">
                    <p class="author__name">${card.author}</p>
                    <p class="author__artist">${card.artist}</p>
                </div>
            </div>
        </div>
    `;
}*/

/*function showAllCards(allCards) {
    const reviewCards = document.getElementById("cards");
    if (!reviewCards) {
        console.error("Element with id 'cards' not found.");
        return;
    }

    // Очистить существующие карточки
    reviewCards.innerHTML = '';

    // Добавить все карточки
    for (let key in allCards) {
        reviewCards.insertAdjacentHTML("beforeend", showCard(allCards[key]));
    }
}

showAllCards(cards);

function clearCards() {
    const reviewCards = document.getElementById("cards");
    if (reviewCards) {
        reviewCards.innerHTML = "";
    }
}*/

/*fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
    .then(response => response.json())
    .then(json => {
        const cards = json.map((comment, index) => {
            return {
                id: comment.id,
                text: comment.body,
                img: "img/review" + (index + 1) + ".png",
                author: comment.email,
                artist: "Artist"
            };
        });

        const cardContainer = document.getElementById('cards');

        cards.forEach(card => {
            cardContainer.innerHTML += showCard(card);
        });
    })*/