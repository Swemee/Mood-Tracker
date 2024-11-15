const modalNameInput = document.getElementById('name');
const modalDateInput = document.getElementById('date');
const modalCategoryInput = document.getElementById('category');
const modalDescriptionInput = document.getElementById('description');
const modalSubmitButton = document.getElementById('submitButton');
const sectionEl = document.getElementById('entryBody');

modalSubmitButton.addEventListener('click', (event) => {

    let entries = [];
    if (!localStorage.getItem('entries')) {
        localStorage.setItem('entries', JSON.stringify([]))
    } else {
        entries = JSON.parse(localStorage.getItem('entries'));
    }

    const entry = {
        name: modalNameInput.value,
        date: modalDateInput.value,
        category: modalCategoryInput.value,
        description: modalDescriptionInput.value
    }

    entries.push(entry);
    localStorage.setItem('entries', JSON.stringify(entries));


})

const displayEntries = function() {

    const entriesList = JSON.parse(localStorage.getItem('entries'));
    
    entriesList.forEach((entry) => { 

        let entryDiv = document.createElement('div');
        let nameDiv = document.createElement('div');
        let dateDiv = document.createElement('div');
        let categoryDiv = document.createElement('div');
        let descriptionDiv = document.createElement('div');

        nameDiv.textContent = entry.name;
        dateDiv.textContent = entry.date;
        categoryDiv.textContent = entry.category;
        descriptionDiv.textContent = entry.description;

        entryDiv.classList.add('entry');
        nameDiv.classList.add('name');
        dateDiv.classList.add('date');
        categoryDiv.classList.add('category');
        descriptionDiv.classList.add('description');

        entryDiv.appendChild(nameDiv);
        entryDiv.appendChild(dateDiv);
        entryDiv.appendChild(categoryDiv);
        entryDiv.appendChild(descriptionDiv);

        sectionEl.appendChild(entryDiv);
    });
}

displayEntries();