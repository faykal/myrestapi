const axios = require("axios")
module.exports = function (app) {
    app.get('/stalk/genshin', async (req, res) => {
            try {
                const { id } = req.query;
                if (!id) return res.status(400).json({ status: false, error: 'Id is required' });
                const fay = await axios.get(`https://api.siputzx.my.id/api/check/genshin?uid=${id}`)
                const kall = fay.data.data
                res.status(200).json({
                    status: true,
                    result: kall.playerData
                });
            } catch (error) {
                res.status(500).send(`Error: ${error.message}`);
        }
    });
}