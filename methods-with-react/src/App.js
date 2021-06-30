import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import Tooltip from "./components/Tooltip";
import {theme} from "./styles";
import {LIST_TYPES} from "./const";
import {useState} from "react";
import Context from "./Context/context";
import {ThemeProvider} from "styled-components";
import {Provider} from "react-redux";
import store from "./store";
import Footer from "./components/Footer";
import Main from "./components/pages/Main";

function App() {
  const [list, setList] = useState(
    Object.getOwnPropertyNames(Array.prototype).map((m) => ({
      name: m,
      type: LIST_TYPES.MAIN,
    }))
  );
  const changeItemTypeByName = (type, name) => (event) => {
    const newList = [...list];
    const elementIndex = newList.findIndex((i) => i.name === name);
    newList[elementIndex] = { ...newList[elementIndex], type };
    setList(newList);
  };

  return (
    <div className="Methods">
      <ThemeProvider theme={theme}>
        <Context.Provider value={{ changeItemTypeByName, list }}>
          <Provider store={store}>
            <Router>
              <Header />
              <Main />
              <Footer />
              <Tooltip />
            </Router>
          </Provider>
        </Context.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
