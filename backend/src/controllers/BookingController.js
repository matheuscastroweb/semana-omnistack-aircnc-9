const Booking = require('../models/Booking')

module.exports = {

    async store(req, res) {
        //User que irá solicitar a reserva
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        })

        //Popular mais de um
        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking)

    }

};