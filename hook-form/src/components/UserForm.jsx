import React, { useState } from "react";

const UserForm = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [firstNameValid,setFirstNameValid] = useState("");
  const [lastNameValid,setLastNameValid] = useState("");
  const [emailValid,setEmailValid] = useState("");
  const [passwordValid,setPasswordValid] = useState("");
  const [confValid, setConfValid] = useState("");
  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstname, lastname, email, password };
    console.log("Welcome", newUser);
    setHasBeenSubmitted(true);
  };

  const formMessage = () => {
    if (hasBeenSubmitted) {
      return "Thank you for submitting the form!";
    } else {
      return "Welcome, please submit the form";
    }
  };

  const firstVali = (e) => {
    setFirstname(e.target.value);
    if(e.target.value.length < 2){
      setFirstNameValid("First Name must be at least 2 characters");
    }
    else{
      setFirstNameValid("");
    }
  };

  const lastVali = (e) => {
    setLastname(e.target.value);
    if(e.target.value.length < 2){
      setLastNameValid("Last Name must be at least 2 characters");
    }
    else{
      setLastNameValid("");
    }
  };

  const emailVali = (e) => {
    setEmail(e.target.value);
    if(e.target.value.length < 5){
      setEmailValid("Email must be at least 5 characters");
    }
    else{
      setEmailValid("");
    }
  };

  const passVali = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 8){
      setPasswordValid("Password must be at least 8 characters");
    }
    else{
      setPasswordValid("");
    }
  };

  const confVali = (e) => {
    setConfpassword(e.target.value);
    if(e.target.value.length != password){
      setConfValid("Passwords is not matching");
    }
    else{
      setConfValid("");
    }
  };

  return (
    <div>
      <form onSubmit={createUser}>
      <h3>{ formMessage() }</h3>
                    
        <div>
                          <label>Firstname: </label>
                          
          <input
            type="text"
            onChange={firstVali}
            value={firstname}
          />
          {
            firstNameValid ? <p style={{color:"red"}}>{firstNameValid}</p>
            : ""
          }
        </div>
        <div>
                          <label>Last name: </label>
                          
          <input
            type="text"
            onChange={lastVali}
            value={lastname}
          />
                    {
            lastNameValid ? <p style={{color:"red"}}>{lastNameValid}</p>
            : ""
          }            
        </div>
                    
        <div>
          <label>Email Address: </label>
          <input
            type="text"
            onChange={emailVali}
            value={email}
          />
                              {
            emailValid ? <p style={{color:"red"}}>{emailValid}</p>
            : ""
          }
        </div>
                    
        <div>
          <label>Password: </label>
          <input
            type="text"
            onChange={passVali}
            value={password}
          />
                                        {
            passwordValid ? <p style={{color:"red"}}>{passwordValid}</p>
            : ""
          }
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="text"
            onChange={confVali}
            value={confpassword}
          />
                                                  {
            confValid ? <p style={{color:"red"}}>{confValid}</p>
            : ""
          }
        </div>
                    
        <input type="submit" value="Create User" />
                
      </form>
      <div>
        <p>First name : {firstname}</p>
        <p>Last name: {lastname}</p>
        <p>Email : {email} </p>
        <p>Password : {password} </p>
        <p>Confirmed password : {confpassword} </p>
      </div>
    </div>
  );
};

export default UserForm;
