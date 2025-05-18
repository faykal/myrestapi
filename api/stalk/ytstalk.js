module.exports = function(app) {
app.get('/stalk/youtube', async (req, res) => {
const { username } = req.query;
if (!username) return res.json({ status: false, error: 'Username is required' })          
        try {            
            const results = await global.fetchJson(`https://fastrestapis.fasturl.cloud/stalk/youtube/advanced?username=${username}`);  
            res.status(200).json({
                status: true,
                result: results.result
            })
        } catch (error) {
            res.status(500).send(`Error: ${error.message}`);
        }
});

}