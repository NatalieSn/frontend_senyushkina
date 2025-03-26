// Функция для отображения карточки
function showCard(card) {
    return "\n        <div class=\"cards__review-".concat(card.id, "\">\n            <p class=\"review__text\">").concat(card.text, "</p>\n            <div class=\"review__author\">\n                <img src=\"").concat(card.img, "\" class=\"review__img\">\n                <div class=\"author\">\n                    <p class=\"author__name\">").concat(card.author, "</p>\n                    <p class=\"author__artist\">").concat(card.artist, "</p>\n                </div>\n            </div>\n        </div>\n    ");
}
// Функция для получения и отображения карточек
fetch('https://jsonplaceholder.typicode.com/comments?_limit=4')
    .then(function (response) { return response.json(); })
    .then(function (json) {
    var cards = json.map(function (comment, index) {
        return {
            id: comment.id,
            text: comment.body,
            img: "img/review".concat(index + 1, ".png"),
            author: comment.email,
            artist: "Artist"
        };
    });
    var cardContainer = document.getElementById('cards');
    if (cardContainer) {
        cards.forEach(function (card) {
            cardContainer.innerHTML += showCard(card);
        });
    }
})
    .catch(function (error) { return console.error('Ошибка:', error); });
