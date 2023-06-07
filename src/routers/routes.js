const path = require('path');
const express = require('express');
const router = express.Router();

const home = require(path.resolve(__dirname, '..', 'controllers', 'homeController'));
const map = require(path.resolve(__dirname, '..', 'controllers', 'mapController'));
const darkModeMiddleware = require(path.resolve(__dirname, '..', 'middlewares', 'darkModeMiddleware'));

router.get('/', home.index);
router.post('/darkmode', darkModeMiddleware);

// // Maps routers
// router.get('/mapsdb-api/v1/readAll', map.readAll);

// router.get('/mapsdb-api/v1/readById', map.readById);

// router.post('/mapsdb-api/v1/create', map.create);

// router.post('/mapsdb-api/v1/update', map.update);

// router.post('/mapsdb-api/v1/delete', map.delete);

module.exports = router;