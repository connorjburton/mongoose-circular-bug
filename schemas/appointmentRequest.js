const { Schema } = require('mongoose');
const Appointment = require('./appointment.js');

module.exports = new Schema({
    Appointment: {
        type: Appointment,
    },
});
