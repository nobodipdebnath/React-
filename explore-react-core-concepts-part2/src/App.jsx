
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import User from './user'


function App() {

function handelClick(){
  alert('Button Clicked')
}
const handelClick2 = () =>{
  alert('Button 2 Clicked')
}

const addTwoFile = (num) =>{
  alert(num + 5);
}
  return (
    <>
      <h1>React core Concept Part 2</h1>
      <Friends></Friends>
      <User></User>
      <Counter></Counter>

      <Team></Team>

      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click 2</button>
      <button onClick={() => {alert('third clicked')}}>click 3</button>
      <button onClick={() => addTwoFile(3)}>Four</button>
    </>
  )
}

export default App
