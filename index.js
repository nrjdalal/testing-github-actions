const app = require('express')()

app.listen(3001)

app.get('/', (req, res) => {
  res.send('Github Actions are lit AF')
})
