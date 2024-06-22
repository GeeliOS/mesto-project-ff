const currentPopupSelector = "popup_is-opened";

/**
 * Закрытие popup'а.
 */
export function closePopup(currentPopupElement) {
  currentPopupElement.removeEventListener("mousedown", handleClickOverlay);
  document.removeEventListener("keydown", handleKeyDownEsc);
  currentPopupElement
    .querySelector(".popup__close")
    .removeEventListener("click", closePopup);

  currentPopupElement.classList.remove(currentPopupSelector);
}

/**
 * Обработчик нажатие кнопки "Esc".
 * @param {KeyboardEvent} event Данные события.
 */
export function handleKeyDownEsc(event) {
  event.key === "Escape" &&
    closePopup(document.querySelector(".popup_is-opened"));
}

/**
 * Обработчик клика по Overlay.
 * @param {Event} event Данные события.
 */
export function handleClickOverlay(event) {
  console.log(event);
  if (event.target.classList.contains("popup__close")) {
    console.log(35);
    closePopup(document.querySelector(".popup_is-opened"));
  }
}

/**
 * Открытие popup'а.
 * @param {Element} element Название popup'а.
 */
export function openPopup(element) {
  element.classList.add(currentPopupSelector);

  // Навешиваем обработчики закрытия модального окна
  element.addEventListener("mousedown", handleClickOverlay);
  document.addEventListener("keydown", handleKeyDownEsc);
  element.querySelector(".popup__close").addEventListener("click", closePopup);
}
