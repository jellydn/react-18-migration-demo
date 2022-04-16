import { BatchingExample } from "@jellydn/ui";

import "./App.css";
import {
  CheckboxIdDemo,
  DeferredValueDemo,
  TransactionDemo,
} from "./NewHooksDemo";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Stable version</h3>
        <img src={logo} alt="logo" />
        <BatchingExample counter={18} />

        <details>
          <summary>New Hooks Demo</summary>
          <CheckboxIdDemo />
          <TransactionDemo />
          <DeferredValueDemo />
        </details>
      </header>
    </div>
  );
}

export default App;
