const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers'); // why this

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store); // dont know what this is

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers }); // why this 