import express from 'express'

import senators from '../data/senatorData.json'

const senatorsRouter = express.Router()

senatorsRouter.route('/')
  .get((req, res) => {
    res.json(senators)
  })

export default senatorsRouter

