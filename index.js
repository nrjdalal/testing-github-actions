const app = require('express')()

app.listen(3003)

app.get('/', (req, res) => {
  res.send('Github Actions are lit AF')
})
