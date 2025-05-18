const axios = require("axios")
module.exports = function (app) {
    app.get('/stalk/pubgstalk', async (req, res) => {
            try {
                const { id } = req.query;
                if (!id) return res.status(400).json({ status: false, error: 'Id is required' });
                const fay = await axios.get(`https://api.kenshiro.cfd/api/stalker/game/pubg?q=${id}`)
                res.status(200).json({
                    status: true,
                    result: fay.data.data
                });
            } catch (error) {
                res.status(500).send(`Error: ${error.message}`);
        }
    });
} 