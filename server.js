const express = require('express')
const app = express()
const port = 3000


const cors = require('cors')

app.use(cors())


app.get('/data', (req, res) => res.json(require('./data/d.json')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))