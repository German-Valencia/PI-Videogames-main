import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux"; //se importa el provider para envolver la app
import store from './store' // se importa el store para que la app lo reconozca como estado global

ReactDOM.render(
  <Provider store={store}>                     {/* aplicación dentro del provider que le permite saber del store y usarlo */}
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
