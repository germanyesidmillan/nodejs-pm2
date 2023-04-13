const express = require('express');
const router = express.Router();

const producto = require('./producto.route');
const user = require('./user.route');

router.use('/user', user);
router.use('/producto', producto);

console.log('indexRoutes')

module.exports = router;

