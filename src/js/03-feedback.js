var throttle = require('lodash.throttle');

const form = document.getElementsByClassName('feedback-form')[0];
const emailInput = document.getElementsByName('email')[0];
const messageInput = document.getElementsByName('message')[0];

form.addEventListener('input', throttle(saveDataFunc, 500));

function saveDataFunc() {
  const data = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

const getDataFromStorage = localStorage.getItem('feedback-form-state');
const parsedDataFromStorage = JSON.parse(getDataFromStorage);

if (getDataFromStorage) {
  emailInput.value = parsedDataFromStorage.email;
  messageInput.value = parsedDataFromStorage.message;
} else {
  emailInput.value = '';
  messageInput.value = '';
}

form.addEventListener('submit', onSubmitFunc);
function onSubmitFunc(e) {
  e.preventDefault();
  emailInput.value = '';
  messageInput.value = '';
  const result = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(result);
  localStorage.clear();
}
