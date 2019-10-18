const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  thumbnail: {
    type: String,
    lowercase: true,
  },
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now,
},
}, {
  //Calcular os virtuals automatico
  toJSON: {
    virtuals: true,
  },
});

//Campo que só é compulado pelo javascript
SpotSchema.virtual('thumbnail_url').get(function() {
  return `http://localhost:3333/files/${this.thumbnail}`
})

//Exportar o model, com o nome a ser conhecido e qual Schema necessário
module.exports = mongoose.model('Spot', SpotSchema);