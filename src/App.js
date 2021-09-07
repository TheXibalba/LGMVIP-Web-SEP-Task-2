// eslint-disable-next-line
import { useState } from "react";
import styles from "./App.module.css";
import CardContainer from "./components/CardContainer";

function App() {
  const [loader, setLoader] = useState(true);
  return (
    <div className="container bg">
      <div className="text-center">
        <h1 className="mt-2">LGM Task-2: Fetch and Display Data Using React:</h1>

        {loader ? <div className={styles.ldsHourGlass}></div> : ""}
      </div>
      <CardContainer setLoader={setLoader}></CardContainer>
    </div>
  );
}

export default App;
