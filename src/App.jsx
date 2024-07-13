import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>Header</h1>
      <div>
        <input type='text' onChange={handleNameChange} />
        <input type='password' onChange={handlePasswordChange} />
      </div>
      <div>
        <p>Your Name: {name}</p>
        <p>Your Password: {password}</p>
      </div>
    </div>
  );
};

export default App;
