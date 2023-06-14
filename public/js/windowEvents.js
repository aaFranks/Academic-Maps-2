const body = document.body;

const mapWindow = document.querySelector('.map-window');
const eventsButton = document.getElementById('events-button');
const searchBar = document.getElementById('search-bar');
const eventList = document.getElementsByClassName('event');
const delModal = document.querySelector('.del-mod-display');
const delEvtId = document.getElementById('del-evt-id');

let isExpanded = false;

eventsButton.addEventListener('click', () => {
  mapWindow.classList.toggle('shrunk');
});


// searchBar.addEventListener('keyup', e => {
//   const text = e.target.value.toLowerCase();
//   [...eventList].forEach(event =>
//     event.querySelector('.event-title').textContent.toLowerCase().startsWith(text)
//       ? event.classList.remove('hidden')
//       : event.classList.add('hidden')
//   );
// });

document.addEventListener('click', e => {
  const el = e.target;
  if (el.classList.contains('del-btn')) {
    delEvtId.setAttribute('value', el.parentNode.childNodes[1].textContent);
    delModal.classList.remove('hidden');
  };
  if (el.classList.contains('cancel-btn')) {
    delModal.classList.add('hidden');
  }
});
