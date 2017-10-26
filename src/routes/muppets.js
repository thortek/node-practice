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
        res.status(200).json(docs)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
      .then(() => db.close())
  })
  .post(parseUrlencoded, (req, res) => {
    const newMuppet = req.body
    collection.insert(newMuppet)
      .then((muppets) => {
        console.log(`Added ${newMuppet.name} to mongoMuppets`)
        res.status(201).json(newMuppet)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
      .then(() => db.close())
  })

muppetRouter.route('/:name')
  .get((req, res) => {
    const muppetName = req.params
    console.log(muppetName)
    collection.find(muppetName)
      .then((doc) => {
        if (doc.length > 0) {
          res.status(200).json(doc)
        } else {
          res.status(404).send(`No muppet named '${muppetName.name}' was found.`)
        }
      })
  })
  .delete((req, res) => {
    const muppetName = req.params
    console.log(muppetName)
    collection.remove(muppetName)
      .then((result) => {
        if (result.deletedCount > 0) {
          console.log(`Deleted ${muppetName}`)
          res.sendStatus(200)
        } else {
          res.sendStatus(500)
        }
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send(err)
      })
  })
  .put(parseUrlencoded, (req, res) => {
    const muppetName = req.params.name
    const replacement = req.body.name
    console.log(replacement)
    collection.update({ name: muppetName }, { name: replacement })
      .then((result) => {
        console.log(`Updated ${muppetName}`)
        res.sendStatus(200)
      })
  })

export default muppetRouter
