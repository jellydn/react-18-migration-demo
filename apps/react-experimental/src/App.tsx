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
        <details>
          <summary>Suspense Demo</summary>
          <Suspense fallback={<p>Loading...</p>}>
            <SuspenseDemo userId={1} />
          </Suspense>
        </details>
      </header>
    </div>
  );
}

export default App;
