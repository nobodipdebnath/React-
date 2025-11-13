import './App.css'
import { DeusiNavbar } from './Components/Duseynav/DeusiNavbar'
import { Chart } from './Components/LineChart/Chart'
import { LineChart } from './Components/LineChart/LineChart'
import { Navbar } from './Components/Navbar/Navbar'
import { Phones } from './Components/Phones/Phones'
import { PriceOption } from './Components/PriceOption/PriceOption'

function App() {


  return (
    <>
      <Navbar></Navbar>
      {/* <DeusiNavbar></DeusiNavbar> */}
      <PriceOption></PriceOption>
      <LineChart></LineChart>
      <Chart></Chart>
      <Phones></Phones>
    </>
  )
}

export default App
