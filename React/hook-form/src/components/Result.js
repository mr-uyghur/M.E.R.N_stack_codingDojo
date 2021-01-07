import React from 'react'

const Result = props =>{
    const {firstName,lastName,email,password,confirmPassword} = props.data
    return (
        <div>
            <h2>Result</h2>
          <p>  first name:{firstName} </p>
          <p> last name:{lastName}</p>
          <p> email:{email}</p>
          <p> password:{password}</p>
          <p> confirm password:{confirmPassword}</p>
            </div>
    )
};

export default Result