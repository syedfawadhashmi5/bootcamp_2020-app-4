import React, { useState } from "react";

function FunctionFrom() {

  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [address, setaddress] = useState("");

  const DataGet = () => {
      let data = {name,age,address}

      console.log('Data' , data)
  }


  return (
    <div>
      <h1>This is a From Component</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        value={age}
        onChange={(e) => setage(e.target.value)}
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setaddress(e.target.value)}
      />

      <br />

      <button onClick={DataGet}>Get value</button>
    </div>
  );
}

export default FunctionFrom;
