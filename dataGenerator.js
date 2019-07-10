const fs = require('fs');
const { creators } = require('./dataCreators')

const entries = Object.entries(creators)

const withProbability = (percent) => Math.random() <= percent / 100

const createRandomData = (p = 100, id) => entries.reduce((accm, [key, value]) => {
  if (withProbability(p)) {
    return ({
      name: null,
      email: null,
      age: null,
      city: null,
      phone: null,
      ...accm,
      [key]: value(),
      id
    })
  }
  return accm
}, {});

const writeRandomData = (data) => {
  fs.writeFileSync('./data/d.json', JSON.stringify(data))
}

const generateRandomIncompleteData = () => {

  const data = [];
  for (let i = 0; i < 10000; i++) {
    if (i < 6000) {
      data.push(createRandomData(undefined, i))
      continue;
    }
    data.push(createRandomData(50, i))
  }

  writeRandomData(data)
}

generateRandomIncompleteData()

module.exports = { generateRandomIncompleteData }

