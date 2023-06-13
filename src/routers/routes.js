const path = require('path');
const express = require('express');
const router = express.Router();

const home = require(path.resolve(__dirname, '..', 'controllers', 'homeController'));
const map = require(path.resolve(__dirname, '..', 'controllers', 'mapController'));

router.get('/', home.index);
router.post('/create', home.createEvent);
router.post('/edit', home.updateEvent);

// Maps routers
router.get('/mapsdb-api/v1/readAll', map.readAll);

router.get('/mapsdb-api/v1/readById/:id', map.readById);

router.post('/mapsdb-api/v1/create', map.createEvent);

router.post('/mapsdb-api/v1/update/:id', map.updateEvent);

router.post('/mapsdb-api/v1/delete/:id', map.deleteEvent);

module.exports = router;