const modalNameInput = document.getElementById('name');
const modalSubmitButton = document.getElementById('submitButton');

console.log(modalNameInput.value);

modalSubmitButton.addEventListener('click', (event) => {
    const value = modalNameInput.value;
    localStorage.setItem('nameInput', modalNameInput.value);
    console.log(value);
})

console.log(localStorage.getItem('nameInput'));

const collectEntries = function() {
    const entries = localStorage.getItem('entries')

    if (!entries) {
        return [];
    } else {
        return JSON.parse(entries);
    }

}

const saveEntries = function(entries) {

    localStorage.setItem('entries', JSON.stringify(entries));

}

const displayEntries = function() {

    

}