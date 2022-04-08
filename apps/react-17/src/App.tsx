import { Button, Counter } from "@jellydn/ui";

import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button title="Hello React 17" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
