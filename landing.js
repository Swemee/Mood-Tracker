const button = document.querySelector('button');

function redirectPage() {
    const userName = localStorage.setItem('name', document.getElementById('name').value);
    window.location.replace("https://swemee.github.io/Mood-Tracker/main.html");
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    redirectPage();
})