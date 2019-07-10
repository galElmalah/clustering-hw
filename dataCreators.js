const faker = require('faker')

module.exports.creators = {
  name: () => faker.name.findName(),
  city: () => faker.address.city(),
  age: () => faker.random.number(95),
  email: () => faker.internet.email(),
  phone: () => faker.phone.phoneNumber()
}