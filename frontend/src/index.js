import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from "./components/Template/theme";

import AuthProvider from "./providers/AuthProvider";
import PortfolioProvider from "./providers/PortfolioProvider";

const theme = createTheme(darkTheme);

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <PortfolioProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </ThemeProvider>
      </PortfolioProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
