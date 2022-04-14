import { BatchingExample } from "@jellydn/ui";

import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <BatchingExample counter={17} />
      </header>
    </div>
  );
}

export default App;
