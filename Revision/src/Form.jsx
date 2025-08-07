import React, { useState } from 'react';
import "./Form.css";

function Form() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [mobile, setMobile] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div>
      <form>
        <fieldset>
          <legend>Form</legend>
          
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          /><br />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          /><br />

          <input
            type="tel"
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
          /><br />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          /><br />

          <button type="submit">Submit</button>
        </fieldset>
<p>name:{name} ,Email:{email},Mobile:{mobile},pass:{password}</p>





      </form>
    </div>
  );
}

export default Form;
