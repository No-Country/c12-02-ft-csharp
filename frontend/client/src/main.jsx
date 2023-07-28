import ReactDOM from "react-dom/client";
import { WrappedApp } from "./App";
import { Provider } from "react-redux";
import store from "./store";
import "./firebase/firebase";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>
);
