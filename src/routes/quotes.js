import express from 'express'
import axios from 'axios'

const quoteRouter = express.Router()

quoteRouter.route('/')
  .get((request, response) => {
  axios.get(`http://quotes.rest/qod.json`)
      .then(res => {
        response.send(res.data.contents.quotes[0].quote)
      })
  })

export default quoteRouter
