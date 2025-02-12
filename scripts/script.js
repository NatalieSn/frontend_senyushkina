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


const cards = {
    card1: {
        text: "I can always find what Im looking for in Splice, whether its the exact sound I want or just a bit of inspiration.",
        img: "../img/review1.png",
        author: "Andrew Huang",
        artist: "Artist",
    },
    card2: {
        text: "Finally a way to buy plugins that works. By paying a little at a time, producers can get legit access to the top VSTs.",
        img: "../img/review2.png",
        author: "KSHMR",
        artist: "Artist",
    },
    card3: {
        text: "Its been fun to dive into Splicers creator community and explore tools that support my own creative process.",
        img: "../img/review3.png",
        author: "Kesha Lee",
        artist: "Artist",
    },
    card4: {
        text: "I can always find what Im looking for in Splice, whether its the exact sound I want or just a bit of inspiration.",
        img: "../img/review1.png",
        author: "Andrew Huang",
        artist: "Artist",
    },
};

function showCard(cards) {
    let reviewCards = document.getElementById("cards");
    console.log(reviewCards);
    let newCard = `
        <div class="cards__review-2">
            <p class="review__text">${cards.text}</p>
            <div class="review__author">
                <img src="${cards.img}" class="review__img">
                <div class="author">
                    <p class="author__name">${cards.author}</p>
                    <p class="author__artist">${cards.artist}</p>
                </div>
            </div>
        </div>
    `;
    reviewCards.innerHTML += newCard;
}

function showAllCards(allCards) {
	for (let i = 0; i < allCards.length; i++) {
		showCard(allCards[i]);
	}
}

showAllCards(cards);

function clearCards() {
	let reviewCards = document.getElementById("cards");
	reviewCards.innerHTML = "";
}