import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import Tooltip from "./components/Tooltip";
import {theme} from "./styles";
import {ThemeProvider} from "styled-components";
import {Provider} from "react-redux";
import store from "./store";
import Footer from "./components/Footer";
import Main from "./components/pages/Main";
import React from "react";

function App() {


  return (
    <div className="Methods">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
            <Router>
              <Header />
              <Main />
              <Footer />
            </Router>
            <Tooltip />
          </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
