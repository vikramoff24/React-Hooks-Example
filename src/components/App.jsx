import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    eMail: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevValue) => {
      return {
        ...prevValue, //...is the spread operator.
        //[] for accessing the name's value
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello
        <br />
        {contact.fName} {contact.lName}
        <br />
      </h1>
      <p>{contact.eMail}</p>

      <input
        name="fName"
        placeHolder="First Name"
        value={contact.fName}
        onChange={handleChange}
      />
      <input
        name="lName"
        placeHolder="Last Name"
        value={contact.lName}
        onChange={handleChange}
      />
      <input
        name="eMail"
        placeHolder="E Mail"
        value={contact.eMail}
        onChange={handleChange}
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
