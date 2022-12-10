import React, { useState } from "react";

const UserForm = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstname, lastname, email, password };
    console.log("Welcome", newUser);
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfpassword("");
  };

  return (
    <div>
    <form onSubmit={createUser}>
                  
      <div>
                        <label>Firstname: </label>
                        
        <input type="text" onChange={(e) => setFirstname(e.target.value)} value={ firstname } />
                    
      </div>
      <div>
                        <label>Lasttname: </label>
                        
        <input type="text" onChange={(e) => setLastname(e.target.value)} value={ lastname } />
                    
      </div>
                  
      <div>
        <label>Email Address: </label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
      </div>
                  
      <div>
        <label>Password: </label>
        <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
      </div>
      <div>
        <label>Password: </label>
        <input type="text" onChange={(e) => setConfpassword(e.target.value)} value={confpassword} />
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
