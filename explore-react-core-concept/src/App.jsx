import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ToDo from "./todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {
  const [count, setCount] = useState(0);
  const actors = ['sakib', 'raj', 'jasim','rubel', 'salman shah']

  const books = [
    {id: 1, name: 'Physics', price: 110},
    {id: 2, name: 'Math', price: 100},
    {id: 3, name: 'Chemistry', price: 130},
    {id: 4, name: 'Biology', price: 150}
  ]

  const singers = [
    {id: 1, name: 'Dr. Mahfuzur Rahaman', age: 65},
    {id: 2, name: 'Eva Rahaman', age: 38},
    {id: 3, name: 'Shuvro Dev', age: 73},
    {id: 4, name: 'Pritom', age: 27},
  ]
  return (
    <>
    <BookStore books = {books}></BookStore>
      <h1>Vite + React</h1>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Actor name ={'Nobodip Debnath'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <ToDo task="Learn React" isDone={true}></ToDo>
      <ToDo task="Explore Core Concepts" isDone={false}></ToDo>
      <ToDo task="Try Jsx" isDone={true}></ToDo> */}
      {/* <Device name="Laptop" price="55k"></Device>
      <Device name="Mobile" price="17k"></Device>
      <Device name="watch" price="1k"></Device>
      <Person />
      <Student grade="7" score="99"></Student>
      <Student grade="5th"></Student>
      <Developer/> */}
    </>
  );
}

function Device(props) {
  // console.log(props)
  return (
    <h2>
      This Device: {props.name} price: {props.price}
    </h2>
  );
}
function Person() {
  const age = 25;
  const money = 20;

  const person = {
    name: "Sakib",
    age: 12,
  };
  return (
    <h3>
      I am a {person.name} with age {age + money}
    </h3>
  );
}

const { grade, score } = { grade: "7", score: "99 " };

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h1>This is a Student</h1>
      <p>Name: {}</p>
      <p>Class : {grade}</p>
      <p>Score: {score} </p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h5>Developer</h5>
      <p>Coding : </p>
    </div>
  );
}
export default App;
