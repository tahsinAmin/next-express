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

const port = process.env.PORT || 3001
app.listen(port, (err) => {
  if (err) {
    console.log('some error with port: ', port, err)
  } else {
    console.log('server running...', port)
  }
})
