const index = async (req, res) => {
  fetch('http://localhost:3000/mapsdb-api/v1/readAll')
    .then(response => response.json())
    .then(data => {
      res.render('index.ejs', { events: data });
    })
    .catch(e => console.error(e));
};

const createEvent = (req, res) => {
  res.render('event', { method: 'create', pos: req.body });
};

const updateEvent = (req, res) => {
  res.render('event', { method: 'update', event: req.body });
};

module.exports = {
  index,
  createEvent,
  updateEvent
};