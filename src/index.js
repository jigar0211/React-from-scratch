import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import ReactDOM from 'react-dom/client';

// ReactDOM.render(<App/>, document.querySelector("#root"))
// const root = document.getElementById('root');
// ReactDOM.createRoot(root).render(<App />);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);