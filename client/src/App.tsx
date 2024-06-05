import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((res) => setData(res.msg));
  }, []);

  return (
    <>
      {/* Rendering the fetched data as a list */}
      {data && <div>Data: {data}</div>}
    </>
  );
}

export default App;
