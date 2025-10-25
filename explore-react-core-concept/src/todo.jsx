// export default function ToDo({task, isDone}){
//     if(isDone){
//         return <li>Finished : {task} </li>
//     } else{
//         return <li> work one : {task}</li>
//     }

// }

// Conditional rendering option one

// export default function ToDo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished : {task} </li>;
//   }
//   return <li> work one : {task}</li>;
// }

// Conditional rendering option Two

// export default function ToDo({ task, isDone }) {
//   return <li>{isDone ? 'Finished' : 'Work on'}: {task} </li>;
// }

// Conditional rendering option three  :Ternary operator 

// export default function ToDo({task, isDone}){
//     return (
//         <li>{task} {isDone && ": Done"}</li>
//     )
// }
// Conditional rendering option Four : &&

// export default function ToDo({task, isDone}){
//     return (
//         <li>{task} {isDone || ": Do it"}</li>
//     )
// }
// Conditional rendering option Five : ||

export default function ToDo({ task, isDone }) {
    let listItem;
  if (isDone) {
    return listItem = <li>Finished : {task} </li>;
  } else{
    return listItem =  <li> work one : {task}</li>;
  }
  return listItem;
  
}

// Conditional rendering option six : 
