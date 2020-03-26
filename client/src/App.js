import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/test");
      setResponse(data);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Edit <code>src/App.js</code> and save to reload.
          <div>Use /api/* routes to communicate with the server</div>
          <div>{response}</div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;