// Находим форму в DOM
let popup = document.querySelector(".popup"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let profileEditButton = document.querySelector('.profile__edit-button');     // кнопка редактирования профиля
let nameOutput = document.querySelector('.profile__name');
let aboutOutput = document.querySelector('.profile__about');

let closePopupEditButton = document.querySelector('.popup__close');          // кнопка закрытия редактирования профиля
let closePopupAddButton = document.querySelector('.popup__close-add');       // кнпока закрытия добавления новой карточки

let newCardElements = document.querySelector('.elements');                     // пуской блок, место куда всталю карточку

// Форма редактирования профилья ----------------------------------------------------
let popupForm = document.querySelector('.popup__form');
let nameInput = popupForm.querySelector('.popup__form-input_type_name');
let aboutInput = popupForm.querySelector('.popup__form-input_type_about');



let popupEditProfile = document.querySelector('.popup_edit-profile');

// Форма добавления новой карточки-----------------------------
let popupNewCardForm = document.querySelector('.popup__form_new-card');
let newCardTitle = popupNewCardForm.querySelector('.popup__form-input_type_title');
let newCardLink = popupNewCardForm.querySelector('.popup__form-input_type_link');

let popupAddCard = document.querySelector('.popup_new-card');
let profileNewCardButton = document.querySelector('.profile__add-button');



// ф-ия сбора карточки из темплейт

function createCardTemplate(name, link) {
   let cardTemplate = document.querySelector('#element-template').content;
   let cardElement = cardTemplate.querySelector('.element').cloneNode(true);
   cardElement.querySelector('.element__photo').src = link;
   cardElement.querySelector('.element__name').textContent = name;

   cardElement.querySelector('.element__like').addEventListener('click', function(e) {
      e.target.classList.toggle('element__like_active');
   });

   cardElement.querySelector('.element__delete-button').addEventListener('click', function() {
      cardElement.closest('.element').remove();
   });
   return cardElement;
};


// ф-ия добавления 6 карточек из массива на страницу (созданный пустой блок для вставки)
initialCards.forEach(function(element) {
   newCardElements.append(createCardTemplate(element.name, element.link)); 
 });

// ф-ия добовдения карточки на старницу DOM, перед массивом
function createCard(cardElement) {
   newCardElements.prepend(cardElement);
}


// function newCard(popupAddCard) {
// popup.classList.add('popup_opened')
// };


function openPopup(popup) {
   popup.classList.add('popup_opened');
}

function closePopup(popup) {
   popup.classList.remove('popup_opened');
}


// Блок редактирования профиля -----------------------------------------------
function formSubmitHandler(evt) {
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
popupForm.addEventListener('submit', formSubmitHandler);

closePopupEditButton.addEventListener('click', function() {
   closePopup(popupEditProfile);
}); 

closePopupAddButton.addEventListener('click', function() {
   closePopup(popupAddCard);
});

profileNewCardButton.addEventListener('click', function() {
   // console.log('ЭТО НАЭЖАТИЕ НА ДОБАВЛЕНИЕ КАРТОЧИ');
   openPopup(popupAddCard);
});

