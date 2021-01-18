const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')

app.use(cors())

app.use(express.json(), express.urlencoded({ extended:true }))

require("./server/config/mongoose.config")
// require mongoose.config
require("./server/routes/joke.routes")(app);
// require routes


app.listen(port, () => console.log(`listening on port ${port}`))