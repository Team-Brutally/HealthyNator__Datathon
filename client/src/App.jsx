import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-center text-3xl text-red-500">Hello World!</div>
    </>
  );
}

export default App;
