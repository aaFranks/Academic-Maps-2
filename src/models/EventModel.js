const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  positionLat: { type: String, required: true },
  positionLng: { type: String, required: true },
  description: { type: String, default: '' },
  startDate: { type: Date, default: new Date().getTime },
  endingDate: { type: Date, default: new Date().getTime }
});

const EventModel = mongoose.model('Event', EventSchema);

class Event {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.event = null;
  }

  async create() {
    this.event = await EventModel.create(this.body);
  }

  static async readAll() {
    const events = await EventModel.find();
    return events;
  }

  static async readById(id) {
    if (typeof id !== 'string') return typeof id;
    const event = await EventModel.findById(id);
    return event;
  }

  async update(id) {
    if (typeof id !== 'string') return;
    this.event = await EventModel.findByIdAndUpdate(id, this.body, { new: true });
  }

  static async delete(id) {
    if (typeof id !== 'string') return;
    const event = EventModel.findByIdAndDelete(id);
    return event;
  }
}

module.exports = Event;