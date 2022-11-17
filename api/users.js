module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.json([
            {name: 'John', location: 'Malta'},
            {name: 'Xander', location: 'Valletta'},
        ])
    } else {
        const { name, location } = req.body
        res.send({ status: "User Created", name, location })
    }
}