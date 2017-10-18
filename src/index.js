import express from 'express'
import morgan from 'morgan'

import muppets from './routes/muppets'
import quotes from './routes/quotes'

const app = express()

app.use(express.static('public'))
app.use(morgan('tiny'))

app.use('/muppets', muppets)
app.use('/quotes', quotes)

app.get('/', (req, res) => {
  return res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000, () => console.log('My node app with Express listening on port 3000'))

/*

C - Create   === "POST"
R - Read     === "GET"
U - Update   === "PUT"
D - Delete   === "DELETE"

*/