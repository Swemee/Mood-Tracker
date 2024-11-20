const modalNameInput = document.getElementById('name');
const modalDateInput = document.getElementById('date');
const modalCategoryInput = document.getElementById('category');
const modalDescriptionInput = document.getElementById('description');
const modalSubmitButton = document.getElementById('submitButton');
const sectionEl = document.getElementById('entryBody');
const userGreeting = document.getElementById('greeting')
const userName = localStorage.getItem('name')

userGreeting.innerHTML = `Hello, ${userName}!`

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
    
    insertFn(entry.name,entry.date,entry.category,entry.description)

    if (modalCategoryInput.value === "Select Emotion") {
        return;
    } else {
        entries.push(entry);
    }

    localStorage.setItem('entries', JSON.stringify(entries));


})

function insertFn(name,date,category,description) {
    const table = document.getElementById("tab").
       getElementsByTagName('tbody')[0];
       console.log(table)
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2)
    const cell4 = newRow.insertCell(3)
    cell1.innerHTML = name;
    cell2.innerHTML = date;
    cell3.innerHTML = category;
    cell4.innerHTML = description;

    table.appendChild(newRow)
}
const displayEntries = function() {

    const entriesList = JSON.parse(localStorage.getItem('entries'));
    
    entriesList.forEach((entry) => { 
        
        insertFn(entry.name,entry.date,entry.category,entry.description)

    });
}

displayEntries();