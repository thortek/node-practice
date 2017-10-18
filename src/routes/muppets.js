import express from 'express'
import bodyParser from 'body-parser'

const muppetRouter = express.Router()
const parseUrlencoded = bodyParser.urlencoded({ extended: false })

let muppets = ['kermit', 'fozzy', 'piggy', 'beaker']

muppetRouter.route('/')
  .get((req, res) => {
    res.send(`Current muppets: ${muppets}`)
  })
  .post(parseUrlencoded, function (req, res) {
    const newMuppet = req.body
    console.log(newMuppet)
    muppets.push(newMuppet.name)
    console.log(muppets)
    res.status(201).json(newMuppet)
  })

muppetRouter.route('/:muppet')
  .delete((req, res) => {
    console.log(req.params.muppet)
    const index = muppets.indexOf(req.params.muppet)
    if (index !== -1) {
      muppets.splice(index, 1)
      console.log(muppets)
      res.sendStatus(200)
    } else res.sendStatus(404)
  })

export default muppetRouter
