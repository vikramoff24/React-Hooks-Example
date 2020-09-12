import React, { useState } from "react";

function App() {
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
