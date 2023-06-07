const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  positionLat: { type: String, required: true },
  positionLng: { type: String, required: true },
  description: String,
  startDate: Date,
  endingDate: Date
});

const EventModel = mongoose.model('Event', EventSchema);

module.exports = EventModel;