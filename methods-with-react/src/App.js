import logo from './logo.svg';
import './App.css';
import List from "./components/List";


const headerText = `Let's now a little about methods in JS with React!`
function App() {
  const methods = Object.getOwnPropertyNames(Array.prototype);
  const mutatingMethods = ['copyWithin', 'fill', 'map', 'push', 'pop', 'reverse', 'shift', 'unshift', 'sort', 'splice'];
  const nonMutatingMethods = methods.filter(m => typeof Array.prototype[m]).filter(m => !mutatingMethods.includes(m));
  return (
    <div className="Methods">
      <header className="App-header">
        <h1>Methods</h1>
        <img src={logo} className="App-logo" alt="logo" />
       <p className="Header-description">
         {headerText}
       </p>

      </header>
      <section className="Methods-body">
        <List list = {mutatingMethods} title = "Mutating"/>
        <List list = {nonMutatingMethods} title = "Non mutating"/>

      </section>
    </div>
  );
}

export default App;
