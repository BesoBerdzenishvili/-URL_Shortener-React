import React, { useState } from "react";

function App() {
  const [inputData, setInputData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send data to server using fetch
    fetch("https://vast-lime-walkingstick-wear.cyclic.app/urls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ longUrl: inputData }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    // Clear input field
    setInputData("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
