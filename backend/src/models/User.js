const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
},
createdAt: {
    type: Date,
    default: Date.now,
},
});

//Exportar o model, com o nome a ser conhecido e qual Schema necessário
module.exports = mongoose.model('User', UserSchema);