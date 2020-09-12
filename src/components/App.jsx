import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFullName((prevValue) => {
      if (name === "fName")
        return {
          fName: value,
          lName: prevValue.lName
        };
      else if (name === "lName")
        return {
          fName: prevValue.fName,
          lName: value
        };
    });
  }
  return (
    <div className="container">
      <h1>
        Hello
        <br />
        {fullName.fName} {fullName.lName}
        <br />
      </h1>

      <input
        name="fName"
        placeHolder="First Name"
        value={fullName.fName}
        onChange={handleChange}
      />
      <input
        name="lName"
        placeHolder="Last Name"
        mvalue={fullName.lName}
        onChange={handleChange}
      />
      <button>Submit</button>
    </div>
  );
}

export default App;
