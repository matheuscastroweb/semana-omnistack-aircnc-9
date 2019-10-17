const express = require('express');
const SessionsController = require('./controllers/SessionController');
const DashboardController = require('./controllers/DashboardController');
const SpotController = require('./controllers/SpotController');
const BookingController = require('./controllers/BookingController');

const multer = require('multer')
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig)


routes.post('/sessions', SessionsController.store);

routes.post('/spots', upload.single('thumbnail') ,SpotController.store);
routes.get('/spots',SpotController.index);

routes.get('/dashboard',DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes;