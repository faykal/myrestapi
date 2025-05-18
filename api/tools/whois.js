module.exports = function(app) {
app.get('/tools/whois', async (req, res) => {
        try {
    const { dns } = req.query;
    if (!dns) return res.json({ status: false, error: 'Dns is required' });
            const results = await global.fetchJson(`https://fastrestapis.fasturl.cloud/tool/whois?domain=${dns}`);  
            res.status(200).json({
                status: true,
                result: results.result
            });
        } catch (error) {
            res.status(500).send(`Error: ${error.message}`);
        }
});

};

