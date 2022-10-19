const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/page1', (req, res) => {
  res.send('I am qrz')
})

app.get('/page2', (req, res) => {
  res.send('Would you like to be my friend?')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})