// Единый интерфейс для карточки отзыва
interface ReviewCard {
    id: number;
    text: string;       
    img: string;        
    author: string;     
    artist: string;     
}

// Функция для генерации HTML карточки
function showCard(card: ReviewCard): string {
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
function fetchAndDisplayCards(): void {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
        .then((response: Response) => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then((comments: Array<{ id: number; body: string; email: string }>) => {
            const cards: ReviewCard[] = comments.map((comment, index) => ({
                id: comment.id,
                text: comment.body,
                img: `img/review${index + 1}.png`,
                author: comment.email,
                artist: "Artist"
            }));

            const cardContainer = document.getElementById('cards');
            if (!cardContainer) throw new Error('Card container not found!');

            cardContainer.innerHTML = cards.map(showCard).join('');
        })
        .catch((error: Error) => console.error('Error:', error));
}

// Запускаем загрузку карточек
fetchAndDisplayCards();