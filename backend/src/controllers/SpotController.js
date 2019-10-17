const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {

    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech })
        return res.json(spots);

    },

    //Função assincrona 
    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;

        //Pegar o ID do usuário pelo header passado pelo insominia
        const { user } = req.headers;

        const user = await User.findById(user);

        if (!user) return res.status(400).json({ error: 'User does not exists ' });

        const spot = await Spot.create({
            user,
            thumbnail: filename,
            company,
            //Map percorre uma string e trim recorta os espaços em branco antes e depois
            techs: techs.split(',').map(tech => tech.trim()),
            price,
        })

        return res.json({ spot })
    }
}