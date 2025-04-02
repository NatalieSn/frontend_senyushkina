// Функция для генерации HTML карточки
function showCard(card) {
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
}
// Функция для загрузки и отображения карточек
function fetchAndDisplayCards() {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
        .then((response) => {
        if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    })
        .then((comments) => {
        const cards = comments.map((comment, index) => ({
            id: comment.id,
            text: comment.body,
            img: `img/review${index + 1}.png`,
            author: comment.email,
            artist: "Artist"
        }));
        const cardContainer = document.getElementById('cards');
        if (!cardContainer)
            throw new Error('Card container not found!');
        cardContainer.innerHTML = cards.map(showCard).join('');
    })
        .catch((error) => console.error('Error:', error));
}
// Запускаем загрузку карточек
fetchAndDisplayCards();
//# sourceMappingURL=main.js.map