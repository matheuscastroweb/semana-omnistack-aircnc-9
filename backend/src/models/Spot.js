const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: {
        type: String,
        lowercase: true,
    },
    company: {
        type: String,
    },
    price: {
        type: Number,
    },
    techs: [String],
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
module.exports = mongoose.model('Spot', SpotSchema);