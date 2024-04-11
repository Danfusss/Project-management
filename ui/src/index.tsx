import { ThemeProvider } from "@mui/material";
import { Settings } from "luxon";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import BaseLayout from "components/shared/layout/BaseLayout";

// import theme from "./config/themes/main.scss";
import "./index.scss";
import { Provider } from "react-redux";

import theme from "config/themes/main";
import { store } from "store/index";

Settings.defaultLocale = "ru";

const rootElement = document.querySelector("#root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <BaseLayout />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
