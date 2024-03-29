import React, { useState } from "react";
import axios from "axios";
const PersonForm = () => {
  //keep track of what is being typed via useState hook
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    
    //make a post request to create a new person
    axios
      .post("http://localhost:8000/api/people", {
        firstName,
        lastName,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      //prevent default behavior of the submit
    // e.preventDefault();
  };
  //onChange to update firstName and lastName
  return (
    <form onSubmit={onSubmitHandler}>
      <h1> Product Manager </h1>
      <p>
        <label>Title</label>
        <br />
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
      </p>
      <p>
        <label>Price</label>
        <br />
        <input type="text" onChange={(e) => setLastName(e.target.value)} />
      </p>
      <p>
        <label>Description</label>
        <br />
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </p>
      <input type="Submit" value="Create" />
    </form>
  );
};

export default PersonForm