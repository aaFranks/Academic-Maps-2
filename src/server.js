require('dotenv').config();
const env = process.env;
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

// DATABASE
const mongoose = require('mongoose');
const dbConn = 'Database connected';
async function connect() {
  await mongoose.connect(env.CONNECTION_STRING, { writeConcern: { wtimeout: 30000 } })
    .then(() => {
      console.log(dbConn);
      app.emit(dbConn);
    }).catch(err => console.log(err));
} connect();

// EXPRESS
const router = require(path.resolve(__dirname, 'routers', 'routes'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(cookieParser());

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(router);

app.on(dbConn, () => app.listen(port, () => console.log(`
Server listening on port ${port}
Acess: http://localhost:${port}
`)));