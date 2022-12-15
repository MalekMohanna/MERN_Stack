const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;
app.listen( port, () => console.log(`Listening on port: ${port}`) );
const createUser = () => {
  const newFake = {
      password: faker.internet.password(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
      lastName: faker.name.lastName(),
      firstName:faker.name.firstName(),
      _id:faker.datatype.uuid(),
  };
  return newFake;
};

const createCompany = () => {
  const newFake = {
      _id:faker.datatype.uuid(),
      name:faker.company.name(),
      adress:{street:faker.address.street(),city:faker.address.city(),state:faker.address.state(),zipCode:faker.address.zipCode(),country:faker.address.county()}
      
  };
  return newFake;
};

const createBoth=()=>{
  return{user:createUser(),company:createCompany};
}

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api/users/new", (req, res) => {
res.json( createUser() );
});

app.get("/api/companies/new", (req, res) => {
  res.json( createCompany() );
  });

  app.get("/api/user/company", (req, res) => {
    res.json( createBoth() );
    });
