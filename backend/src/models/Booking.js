const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    },
    date: {
        type: String,
    },
    approved: {
        type: Boolean,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

})

//Exportar o model, com o nome a ser conhecido e qual Schema necessário
module.exports = mongoose.model('Booking', BookingSchema);