import {clearForm, setFormSubmit} from './form.js';

const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.banner__reserve-button');
const closeModalButton = modal.querySelector('.modal__close-button');
const reservationForm = modal.querySelector('.reservation__form');
const submitButton = modal.querySelector('button[type="submit"]');

const onCloseModalButtonClick = () => {
  modal.classList.add('modal--close');
  clearForm(reservationForm);
};

const onReserveButtonClick = () => {
  setFormSubmit(
    reservationForm,
    () => {
      modal.classList.add('modal--close');
    },
    () => {
      alert("No server. Reservation failed");
      submitButton.disabled = true;
    },
  );
}

const renderModal = () => {
  openModalButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal--close');
  });

  closeModalButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    onCloseModalButtonClick();
  });

  submitButton.addEventListener('click', () => {
    onReserveButtonClick();
  });
};

export {renderModal};
