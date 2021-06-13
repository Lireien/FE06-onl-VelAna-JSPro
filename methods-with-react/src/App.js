import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import Tooltip from "./components/Tooltip";
import { LIST_TYPES } from "./const";
import { listFilter } from "./helpers";
import { useState } from "react";

function App() {
  const headerTitle = `Let's now a little about methods in JS with React!`;
  const [methods, setList] = useState(
    Object.getOwnPropertyNames(Array.prototype).map((m) => ({
      name: m,
      type: LIST_TYPES.MAIN,
    }))
  );
  const changeItemTypeByName = (type, name) => (event) => {
    const newList = [...methods];
    const elementIndex = newList.findIndex((i) => i.name === name);
    newList[elementIndex] = { ...newList[elementIndex], type };
    setList(newList);
  };

  return (
    <div className="Methods">
      <Header title={headerTitle} />
      <section className="Methods-body">
        <List
          list={[...methods].filter(listFilter(LIST_TYPES.MUTATING))}
          title={LIST_TYPES.MUTATING}
          changeType={changeItemTypeByName}
        />
        <List
          list={[...methods].filter(listFilter(LIST_TYPES.MAIN))}
          title={LIST_TYPES.MAIN}
          changeType={changeItemTypeByName}
        />
        <List
          list={[...methods].filter(listFilter(LIST_TYPES.NON_MUTATING))}
          title={LIST_TYPES.NON_MUTATING}
          changeType={changeItemTypeByName}
        />
      </section>
      <Tooltip />
    </div>
  );
}

export default App;
