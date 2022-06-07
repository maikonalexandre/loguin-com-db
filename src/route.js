const express = require('express');
const LoguinController = require('./controllers/LoguinController');

const route = express.Router();

route.get('/', (req, res) => res.render("index"));
route.post('/', LoguinController.create);

route.get('/usuario', (req, res) => res.render("usuario"));
route.get('/senhaincorreta', (req, res) => res.render("senhaincorreta"));

route.get('/new-usuario', (req, res) => res.render("newUsuario"));
route.post('/new-usuario', LoguinController.novo);
module.exports = route;
