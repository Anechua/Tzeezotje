import {sendData} from './api.js';

const clearForm = (form) => {
  form.querySelectorAll('input').forEach((element) => {element.value = ""});
  form.querySelectorAll('textarea').forEach((element) => {element.value = ""});
}

const setFormSubmit = (form, onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(onSuccess, onFail, new FormData(evt.target));
  });
};

export {clearForm, setFormSubmit}
