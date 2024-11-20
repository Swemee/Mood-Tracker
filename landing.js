const button = document.querySelector('button');

function redirectPage() {
    const userName = localStorage.setItem('name', document.getElementById('name').value);
    window.location.replace("file:///C:/Users/aaeku/bootcamp/Homework/Mood-Tracker/main.html");
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    redirectPage();
})