const express = require('express');
const router = express.Router();
const coordinate_controller = require('../controllers/coordinate.controller');

router.post('/create', coordinate_controller.create);

router.get('/listAll', coordinate_controller.listAll);

router.post('/search', coordinate_controller.search);

router.delete('/:id/delete', coordinate_controller.delete);

router.get('/coordinates', coordinate_controller.get);

module.exports = router;