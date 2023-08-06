import {clearForm, setFormSubmit} from './form.js';

const requestForm = document.querySelector('.request__form');
const submitButton = document.querySelector('.request__button');

const onRequestButtonClick = () => {
  setFormSubmit(
    requestForm,
    () => {
      alert("Request has been sent");
      clearForm();
    },
    () => {
      alert("No server. Request dispatch is not completed");
      submitButton.disabled = true;
    },
  );
}

export {onRequestButtonClick}
