import { useEffect, useState } from "react"
import Data from "./Data";

function Datas() {
    const [datas, setDatas] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(res => setDatas(res));
    },[])
  return (
    <div>
        <h1>Data:  </h1>
        {
            datas.map((data)=> 
                <Data data={data}></Data>
            )
        }
    </div>
  )
}

export default Datas