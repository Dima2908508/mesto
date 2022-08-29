const popup = document.querySelector(".popup"); // Воспользуйтесь методом querySelector()
const profileEditButton = document.querySelector('.profile__edit-button');     // кнопка редактирования профиля
const nameOutput = document.querySelector('.profile__name');
const aboutOutput = document.querySelector('.profile__about');
const closePopupEditButton = document.querySelector('.popup__close');          // кнопка закрытия редактирования профиля
const closePopupAddButton = document.querySelector('.popup__close-add');       // кнпока закрытия добавления новой карточки

const newCardElements = document.querySelector('.elements');                   // пуской блок, место куда всталю карточку
// Форма редактирования профилья  ----------------------------------------------------
const popupForm = document.querySelector('.popup__form');
const nameInput = popupForm.querySelector('.popup__form-input_type_name');
const aboutInput = popupForm.querySelector('.popup__form-input_type_about');
const popupEditProfile = document.querySelector('.popup_edit-profile');
// Форма добавления новой карточки  --------------------------------------------------
const popupNewCardForm = document.querySelector('.popup__form_new-card');
const newCardTitle = popupNewCardForm.querySelector('.popup__form-input_type_title');
const newCardLink = popupNewCardForm.querySelector('.popup__form-input_type_link');

const popupAddCard = document.querySelector('.popup_new-card');
const profileNewCardButton = document.querySelector('.profile__add-button');
// Форма открытия полной карточки по клику ------------------------------------------
const imagePopup = document.querySelector('.popup__image-full');                       //выбираем нашу картинку
const imagePopupDescription = document.querySelector('.popup__description');           //подпись к карточки
const popupZoomImage = document.querySelector('.popup_full-card');                     //открытие окна на полной карточке 
const closePopupFullImage = document.querySelector('.popup__close-full');              //закрытие окна полной  картинки

const cardTemplate = document.querySelector('#element-template').content;

// ф-ия сбора карточки из темплейт

function createCardTemplate(name, link) {
   const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
   const cardImage = cardElement.querySelector('.element__photo');
   const cardTitle = cardElement.querySelector('.element__name');
   const likeButton = cardElement.querySelector('.element__like');
   const trashButton = cardElement.querySelector('.element__delete-button');

   cardImage.src = link;
   cardImage.alt = link;
   cardTitle.textContent = name;

   likeButton.addEventListener('click', function(e) {       // переключатель лайка, как в тренажере
      e.target.classList.toggle('element__like_active');
   });

   trashButton.addEventListener('click', function() {    //удаление карточки по клику на кнопке
      cardElement.closest('.element').remove();
   });

   cardImage.addEventListener('click', function() {               
      imagePopup.src = link;
      imagePopup.alt = link;
      imagePopupDescription.textContent = name;
      openPopup(popupZoomImage);
   })

   return cardElement;
};


initialCards.forEach(function(element) {
   const cardElement = createCardTemplate(element.name, element.link);
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
   const card = createCardTemplate(newCardTitle.value, newCardLink.value);
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
