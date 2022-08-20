import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

ReactDOM.render(<App />, document.querySelector(".root"));

// Endereço para funcionar na máquina local
// REACT_APP_BASE_URL=http://localhost:5000

// Endereço para funcionar na AWS
// REACT_APP_BASE_URL=http://ec2-54-172-0-67.compute-1.amazonaws.com/api