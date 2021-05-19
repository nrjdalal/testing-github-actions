const app = require('express')()

app.listen(3000)

app.get('/', (req, res) => {
  res.send('Github Actions are lit AF')
})
