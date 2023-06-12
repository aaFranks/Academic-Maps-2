const mong = require('./db/database');

const readAll = (req, res) => {


}

const readById = (req, res) => {

  var query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  
}

const createEvent = (req, res) => {

  db.collection.insertOne()

  db.products.insert({
    item: "card",
    qty: 15 
    })
}

const updateEvent = (req, res) => {

  db.collection.updateOne()
  
}

const deleteEvent = (req, res) => {

  db.collection.remove()
  
}

module.exports = {
  readAll,
  readById,
  createEvent,
  updateEvent,
  deleteEvent
}