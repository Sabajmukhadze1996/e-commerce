import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import App from "./App";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import TranslationContextProvider from "./translation/TranslationContextProvider";
import SignUpContextProvider from "./components/signup/SignUpContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TranslationContextProvider>
        <SignUpContextProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </SignUpContextProvider>
      </TranslationContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
