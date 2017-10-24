import express from 'express'
import bodyParser from 'body-parser'
import monk from 'monk'

// Connection URL
const url = 'localhost:27017/mongoMuppets'
const db = monk(url)
const collection = db.get('muppets')

const muppetRouter = express.Router()
const parseUrlencoded = bodyParser.urlencoded({ extended: false })

// let muppets = ['kermit', 'fozzy', 'piggy', 'beaker']

muppetRouter.route('/')
  .get((req, res) => {
    collection.find() // get ALL of the muppets with this
      .then((docs) => {
        console.log(docs)
        res.json(docs)
      })
      .catch((err) => {
        console.log(err)
      })
  })
  .post(parseUrlencoded, function (req, res) {
    const newMuppet = req.body
    console.log(newMuppet)
    collection.insert(newMuppet)
      .then((muppets) => {
        console.log(`Added ${newMuppet.name} to mongoMuppets`)
      })
      .catch((err) => {
        console.log(err)
      })
      .then(() => db.close())

    res.status(201).json(newMuppet)
  })

muppetRouter.route('/:name')
  .get((req, res) => {
    res.send(req.query.ID)
  })
  .delete((req, res) => {
    const muppetName = req.params.name
    console.log(muppetName)
    collection.remove({ name: muppetName })
      .then((result) => {
        console.log(`Deleted ${muppetName}`)
      })
    res.sendStatus(200)
  })
  .put(parseUrlencoded, (req, res) => {
    const muppetName = req.params.name
    const replacement = req.body.name
    console.log(replacement)
    collection.update({ name: muppetName }, { name: replacement })
      .then((result) => {
        console.log(`Updated ${muppetName}`)
      })
    res.sendStatus(200)
  })

export default muppetRouter
