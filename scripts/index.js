// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;
// @todo: DOM узлы
const cardList = document
  .querySelector(".content")
  .querySelector(".places__list");

// @todo: Функция создания карточки

function renderCard(cardData, onDelete) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const image = cardElement.querySelector(".card__image");

  image.src = cardData.link;
  image.alt = cardData.name;

  cardElement.querySelector(".card__title").textContent = cardData.name;
  cardElement.querySelector(".card__delete-button").onclick = onDelete;

  return cardElement;
}

// @todo: Функция удаления карточки

function deleteCard(event) {
  event.target.closest(".card").remove();
}

// @todo: Вывести карточки на страницу

cardList.append(...initialCards.map((data) => renderCard(data, deleteCard)));
