module.exports = function(app) {
app.get('/search/bingimage', async (req, res) => {
        try {
    const { q } = req.query;
    if (!q) return res.json({ status: false, error: 'Query is required' });
            const results = await global.fetchJson(`https://fastrestapis.fasturl.cloud/search/bingimage?ask=${q}`);  
            res.status(200).json({
                status: true,
                result: results.result
            });
        } catch (error) {
            res.status(500).send(`Error: ${error.message}`);
        }
});

};