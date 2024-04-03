import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material";

import App from "./App.jsx";
import theme from "./mui/theme.js";
import "./styles/global.css";
import "./styles/fonts.css";

const client = new ApolloClient({
  uri: import.meta.env.REACT_APP_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
