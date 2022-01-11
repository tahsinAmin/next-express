const express = require('express')
const app = express()
app.use(express.json()) // {"test":1}
app.use(express.urlencoded()) // ? test=1

app.post('/email-contato', (req, res) => {
  res.json({
    ok: true,
  })
})

app.get('/', (req, res) => {
  res.json({
    ok: true,
  })
})

app.listen(3001, (err) => {
  console.log(err)
})
