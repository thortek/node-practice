import express from 'express'
import axios from 'axios'

const congressRouter = express.Router()

congressRouter.route('/')
  .get((request, response) => {
    axios({
      method: 'get',
      url: 'https://api.propublica.org/congress/v1/115/senate/members.json',
      headers: { 'X-API-Key': 'PdHlJBVsubmFdQLe0E0Q52fsiNGwJxbcXA1w5DeK' }
    })
      .then(res => {
        response.json(res.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  })

export default congressRouter

// PdHlJBVsubmFdQLe0E0Q52fsiNGwJxbcXA1w5DeK
