import express from 'express'
import path from 'path'
import morgan from 'morgan'

import muppets from './routes/muppets'
import quotes from './routes/quotes'
import senators from './routes/senators'
import congress from './routes/congress'

const app = express()

app.use(express.static(path.join(__dirname, '/public')))
app.use(morgan('tiny'))

app.use('/muppets', muppets)
app.use('/quotes', quotes)
app.use('/senators', senators)
app.use('/congress', congress)

app.listen(3000, () => console.log('My node app with Express listening on port 3000'))

/*

C - Create   === "POST"
R - Read     === "GET"
U - Update   === "PUT"
D - Delete   === "DELETE"
P - Partial Update === "PATCH"

*/