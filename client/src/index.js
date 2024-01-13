/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DebugScreen from "./features/debug/DebugScreen";


const root = ReactDOM.createRoot(document.getElementById("root"));

// all the pages you can navigate to
const router = createBrowserRouter([
  {
    path: "/",
    element: <DebugScreen />,
  },
  {
    path: "/home",
    element: <App />
  }
]);

// Creates the theme for MUI
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1fdf64",
    },
    secondary: {
      main: "#ce96d8",
    },
    success: {
      main: "#52c358",
    },
    error: {
      main: "#ff6152",
    },
    info: {
      main: "#60caff",
    },
    warning: {
      main: "#ff9442",
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
