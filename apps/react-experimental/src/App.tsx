import { BatchingExample } from "@jellydn/ui";
import { Suspense } from "react";

import "./App.css";
import SuspenseDemo from "./SuspenseDemo";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Experimental version</h3>
        <img src={logo} alt="logo" />
        <BatchingExample counter={18} />

        {/* NOTE: suspense-in-react-18 RFC https://github.com/reactjs/rfcs/blob/main/text/0213-suspense-in-react-18.md */}
        {/* NOTE: New Suspense SSR Architecture in React 18 https://github.com/reactwg/react-18/discussions/37 */}
        <details>
          <summary>Suspense Demo</summary>
          <Suspense fallback={<p>Loading...</p>}>
            <SuspenseDemo />
          </Suspense>
        </details>
      </header>
    </div>
  );
}

export default App;
