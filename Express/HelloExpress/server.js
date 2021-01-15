const express = require("express");
const faker = require("faker");
const app = express();

class Fake{
  constructor(){
    this.name=`${faker.name.jobTitle()} ${faker.name.findName()} ${faker.name.lastName()}`
    this.phrase = faker.hacker.phrase()
  }
}

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ data: new Fake() });
});


app.listen(8000, () =>
  console.log(`Server is locked and loaded on port 8000!`)
);


