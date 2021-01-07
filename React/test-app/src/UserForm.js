import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [firstNameError,  setfirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError,  setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError,  setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError,  setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError,  setConfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password,confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };

    const handleTitle = (e) => {
        setfirstName(e.target.value);
         if(e.target.value.length < 2 ) {
            setfirstNameError("First must be 2 characters or longer!");
             
        }
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
           setLastNameError("Last name must be 2 characters or longer!");
       }
       setEmail(e.target.value);
        if(e.target.value.length < 2) {
            setEmailError("Email must be 2 characters or longer!");
       }
       setPassword(e.target.value);
       if(e.target.value.length < 8) {
        setPasswordError("password must be 8 characters or longer!");
      }
      setConfirmPassword(e.target.value);
      if(e.target.value.length < 8 ) {
        setConfirmPasswordError("password must be 8 characters or longer!");
        
     } else if( e.target.value != {password}){
        setConfirmPasswordError("password must match");
     }
   
    }
    
    return (
        <form onSubmit={ (e) => e.preventDefault(),createUser }>
     {
        hasBeenSubmitted ? 
        <h3>Thank you for submitting the form!</h3> :
        <h3>Welcome, please submit the form.</h3> 
                                                    }
	    <div>
                <label>First name: </label> 
                <input type="text" onChange={ handleTitle } />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{  firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last name: </label> 
                <input type="text" onChange={ handleTitle } />
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleTitle } />
                {
                   emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handleTitle } />
                {
                   passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleTitle } />
                {
                   confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;