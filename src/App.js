import React from "react";
import "./App.css";
import Chat from "./components/Chat";
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <Chat />
  </Provider>
);

export default App;
