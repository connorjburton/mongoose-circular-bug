const { Schema } = require('mongoose');
const AppointmentRequest = require('./appointmentRequest.js').clone();

module.exports = new Schema({
    AppointmentRequests: {
        type: AppointmentRequest,
    },
});