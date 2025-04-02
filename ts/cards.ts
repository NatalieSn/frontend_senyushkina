// Интерфейс для данных карточки
interface Card {
    id: number;
    text: string;
    img: string;
    author: string;
    artist: string;
}

// Функция для отображения карточки
function showCard(card: Card): string {
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

// Функция для получения и отображения карточек
fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
    .then(response => response.json())
    .then((json: Array<{ id: number; body: string; email: string; }>) => {
        const cards: Card[] = json.map((comment, index) => {
            return {
                id: comment.id,
                text: comment.body,
                img: `img/review${index + 1}.png`,
                author: comment.email,
                artist: "Artist"
            };
        });

        const cardContainer = document.getElementById('cards');

        if (cardContainer) {
            cards.forEach(card => {
                cardContainer.innerHTML += showCard(card);
            });
        }
    })
    .catch(error => console.error('Ошибка:', error));
