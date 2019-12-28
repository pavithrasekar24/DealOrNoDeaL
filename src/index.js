import React from "react";
import ReactDOM from "react-dom";
import ViewPage from "./ViewPage";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ViewPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
