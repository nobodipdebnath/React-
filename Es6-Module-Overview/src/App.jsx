import { useEffect, useState } from "react";
import "./App.css";
import { Watch } from "./assets/Components/Watch/Watch";

function App() {
  // const watches = [
  //   { id: 1, name: "Apple Watch Series 9", price: 399 },
  //   { id: 2, name: "Samsung Galaxy Watch 6", price: 299 },
  //   { id: 3, name: "Amazfit GTR 4", price: 199 },
  //   { id: 4, name: "Fitbit Versa 4", price: 249 },
  //   { id: 5, name: "Huawei Watch GT 4", price: 279 },
  // ];

  const [watches, setWatches] = useState([])
  useEffect(() =>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  },[])

  return (
    <>
      <h1>Vite + React</h1>
      {watches.map((watch) => (
        <Watch watch={watch} key={watch.id}></Watch>
      ))}
    </>
  );
}

export default App;
