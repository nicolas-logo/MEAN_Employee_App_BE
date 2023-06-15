const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/employees.routes');
const cors = require('cors');

const app = express();
app.set('port', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/employees', routes);

module.exports = app;