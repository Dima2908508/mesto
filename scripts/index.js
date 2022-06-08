// Находим форму в DOM
let popup = document.querySelector(".popup"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let editButton = document.querySelector('.profile__edit-button');
let nameOutput = document.querySelector('.profile__name');
let aboutOutput = document.querySelector('.profile__about');

let closePopupButton = popup.querySelector('.popup__close');
let popupForm = popup.querySelector('.popup__form');
let nameInput = popupForm.querySelector('.popup__form-input_type_name');
let aboutInput = popupForm.querySelector('.popup__form-input_type_about');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
// Получите значение полей jobInput и nameInput из свойства value
// Выберите элементы, куда должны быть вставлены значения полей
// Вставьте новые значения с помощью textContent

function openPopup() {
   popup.classList.add('popup_opened');
   nameInput.value = nameOutput.textContent;
   aboutInput.value = aboutOutput.textContent;
}

function closePopup() {
   popup.classList.remove('popup_opened');
}

//Эта строчка отменяет стандартную отправку формы.
// Так мы можем определить свою логику отправки.
// О том, как это делать, расскажем позже.

 function formSubmitHandler(evt) {
   evt.preventDefault();
   nameOutput.textContent = nameInput.value;
   aboutOutput.textContent = aboutInput.value;
   popup.classList.remove("popup_opened");
}  

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
editButton.addEventListener('click', openPopup);
closePopupButton .addEventListener('click', closePopup); 
popupForm.addEventListener('submit', formSubmitHandler);