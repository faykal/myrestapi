const axios = require("axios")
module.exports = function (app) {
    app.get('/stalk/twitter', async (req, res) => {
            try {
                const { user } = req.query;
                if (!user) return res.status(400).json({ status: false, error: 'User is required' })
                const fay = await axios.get(`https://api.siputzx.my.id/api/stalk/twitter?user=${user}`)
                res.status(200).json({
                    status: true,
                    result: fay.data.data
                });
            } catch (error) {
                res.status(500).send(`Error: ${error.message}`);
        }
    });
} 