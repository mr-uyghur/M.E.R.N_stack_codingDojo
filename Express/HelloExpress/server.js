const express = require("express");
const faker = require("faker");
const app = express();

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class Fake{
  constructor(){
    this.name=`${faker.name.jobTitle()} ${faker.name.findName()} ${faker.name.lastName()}`
    this.phrase = faker.hacker.phrase()
  }
}
class User{
  constructor(){
    this.name = faker.commerce.productName()
    this.price = `${faker.commerce.price()}`
    this.department = faker.commerce.department()
  }
}
class Company{
  constructor(){
    this.name = faker.commerce.productName()
    this.price = `${faker.commerce.price()}`
    this.department = faker.commerce.department()
  }
}
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ data: new Fake() });
});

app.get("/api/users/new", (req, res) => {
  res.json({ data: new User() });
});

app.get("/api/companies/new", (req, res) => {
  res.json({ data: new Company() });
});

app.get("/api/user/company", (req, res) => {
  res.json({ message: new User(), data: new Company() });
  // res.json({ data: new Company() });
});


app.listen(8000, () =>
  console.log(`Server is locked and loaded on port 8000!`)
);



