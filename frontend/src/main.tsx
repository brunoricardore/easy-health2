import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppContainer } from "./components/AppContainer";

ReactDOM.render(
  <Suspense fallback={<span>...</span>}>
    <BrowserRouter>
      <AppContainer>
        <App />
      </AppContainer>
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
