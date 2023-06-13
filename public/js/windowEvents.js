const body = document.body;

const mapWindow = document.querySelector('.map-window');
const eventsButton = document.getElementById('events-button');

let isExpanded = false;

eventsButton.addEventListener('click', () => {
  mapWindow.classList.toggle('shrunk');
});