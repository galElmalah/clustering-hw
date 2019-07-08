const fs = require('fs');
const faker = require('faker');

const creators = {
  name: faker.name.findName,
  city: faker.address.city,
  age: () => faker.random.number(95),
  email: faker.name.email,
  phone: faker.phone.phoneNumber
}

const withProbability = (percent) => Math.random() > percent / 100

const generateRandomIncompleteData = () => {
  Object.entries(creators).forEach(([key, val]) => {
    console.log(key);
  });
}

generateRandomIncompleteData()