const Spot = require('../models/Spot');

module.exports = {
    async show(req, res) {
        const { user } = req.headers;

        //Populate('nome_do_schema_do_banco'), serve para popular a tabela com o ObjectId de algo
        const spots = await Spot.find({ user }).populate('user');

        return res.json(spots);
    }
}