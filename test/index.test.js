import defaultIndex from '../src'
import Chai from 'chai'

const { expect } = Chai

describe('Boilerplate Index File', () => {
  it ('should exist', done => {
    expect(defaultIndex).to.be.true
    done()
  })
})
