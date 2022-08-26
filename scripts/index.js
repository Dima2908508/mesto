let popup = document.querySelector(".popup"); // Воспользуйтесь методом querySelector()
let profileEditButton = document.querySelector('.profile__edit-button');     // кнопка редактирования профиля
let nameOutput = document.querySelector('.profile__name');
let aboutOutput = document.querySelector('.profile__about');
let closePopupEditButton = document.querySelector('.popup__close');          // кнопка закрытия редактирования профиля
let closePopupAddButton = document.querySelector('.popup__close-add');       // кнпока закрытия добавления новой карточки

let newCardElements = document.querySelector('.elements');                   // пуской блок, место куда всталю карточку
// Форма редактирования профилья  ----------------------------------------------------
let popupForm = document.querySelector('.popup__form');
let nameInput = popupForm.querySelector('.popup__form-input_type_name');
let aboutInput = popupForm.querySelector('.popup__form-input_type_about');
let popupEditProfile = document.querySelector('.popup_edit-profile');
// Форма добавления новой карточки  --------------------------------------------------
let popupNewCardForm = document.querySelector('.popup__form_new-card');
let newCardTitle = popupNewCardForm.querySelector('.popup__form-input_type_title');
let newCardLink = popupNewCardForm.querySelector('.popup__form-input_type_link');

let popupAddCard = document.querySelector('.popup_new-card');
let profileNewCardButton = document.querySelector('.profile__add-button');
// Форма открытия полной карточки по клику ------------------------------------------
let imagePopup = document.querySelector('.popup__image-full');                       //выбираем нашу картинку
let imagePopupDescription = document.querySelector('.popup__description');           //подпись к карточки
let popupZoomImage = document.querySelector('.popup_full-card');                     //открытие окна на полной карточке 
let closePopupFullImage = document.querySelector('.popup__close-full');              //закрытие окна полной  картинки

let cardTemplate = document.querySelector('#element-template').content;

// ф-ия сбора карточки из темплейт

function createCardTemplate(name, link) {
   let cardElement = cardTemplate.querySelector('.element').cloneNode(true);
   cardElement.querySelector('.element__photo').src = link;
   cardElement.querySelector('.element__photo').alt = name;
   cardElement.querySelector('.element__name').textContent = name;

   cardElement.querySelector('.element__like').addEventListener('click', function(e) {       // переключатель лайка, как в тренажере
      e.target.classList.toggle('element__like_active');
   });

   cardElement.querySelector('.element__delete-button').addEventListener('click', function() {    //удаление карточки по клику на кнопке
      cardElement.closest('.element').remove();
   });

   cardElement.querySelector('.element__photo').addEventListener('click', function() {               //передаем данные в параметры ф-ии
      imagePopup.src = link;
      imagePopup.alt = link;
      imagePopupDescription.textContent = name;
      openPopup(popupZoomImage);
   })

   return cardElement;
};


initialCards.forEach(function(element) {
   let cardElement = createCardTemplate(element.name, element.link);
   createCard(cardElement);
})

function createCard(cardElement) {
   newCardElements.prepend(cardElement);
}

function openPopup(popup) {
   popup.classList.add('popup_opened');
}

function closePopup(popup) {
   popup.classList.remove('popup_opened');
}

// Блок редактирования профиля -----------------------------------------------
function submitEditProfileForm(evt) {
   evt.preventDefault();
   nameOutput.textContent = nameInput.value;
   aboutOutput.textContent = aboutInput.value;
   closePopup(popupEditProfile);
}  

profileEditButton.addEventListener('click', function() {
   openPopup(popupEditProfile)
   nameInput.value = nameOutput.textContent;
   aboutInput.value = aboutOutput.textContent;
});
//----------------------------------------------------------------------------

// Событие отправки новой карточки на страницу -------------------------------
function formSubmitHandlerNewCard(evt) {
   evt.preventDefault();
   let card = createCardTemplate(newCardTitle.value, newCardLink.value);
   createCard(card);
   closePopup(popupAddCard);
   popupNewCardForm.reset();
}

popupNewCardForm.addEventListener('submit', formSubmitHandlerNewCard);
popupForm.addEventListener('submit', submitEditProfileForm);

closePopupEditButton.addEventListener('click', function() {
   closePopup(popupEditProfile);
}); 

closePopupAddButton.addEventListener('click', function() {
   closePopup(popupAddCard);
});

profileNewCardButton.addEventListener('click', function() {
   openPopup(popupAddCard);
});

imagePopup.addEventListener('click', function() {
   openPopup(popupZoomImage);
})

closePopupFullImage.addEventListener('click', function() {
   closePopup(popupZoomImage);
})
