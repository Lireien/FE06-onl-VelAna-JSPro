import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import Tooltip from "./components/Tooltip";
import { theme } from "./styles";
import { LIST_TYPES } from "./const";
import { useState } from "react";
import { Context } from "./Context/context";
import { ThemeProvider } from "styled-components";

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
          <Header />
          <section className="Methods-body">
            <List title={LIST_TYPES.MUTATING} />
            <List title={LIST_TYPES.MAIN} />
            <List title={LIST_TYPES.NON_MUTATING} />
          </section>
          <Tooltip />
        </Context.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
