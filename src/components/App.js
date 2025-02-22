import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  let [counter, setCounter] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
  }, []);

  return (
    <div>
      {/* Do not remove the main div */}
      {counter > 0 && <p>You've been on this page for {counter} seconds</p>}
    </div>
  );
};

export default App;
