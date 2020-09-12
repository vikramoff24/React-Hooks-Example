import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    eMail: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFullName((prevValue) => {
      if (name === "fName")
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.eMail
        };
      else if (name === "lName")
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.eMail
        };
      else if (name === "eMail")
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.eMail
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
      <p></p>

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
        placeHolder="E Mai"
        value={contact.eMail}
        onChange={handleChange}
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
