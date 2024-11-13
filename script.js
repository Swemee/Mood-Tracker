const modalNameInput = document.getElementById('name');
const modalSubmitButton = document.getElementById('submitButton');

console.log(modalNameInput.value);

modalSubmitButton.addEventListener('click', (event) => {
    const value = modalNameInput.value;
    localStorage.setItem('nameInput', modalNameInput.value);
    console.log(value);
})

console.log(localStorage.getItem('nameInput'));
