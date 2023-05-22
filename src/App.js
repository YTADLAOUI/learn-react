import Youssef from'./components/Youssef.js'
import './App.css';
import { useState } from 'react';

function App() {

const [person,setPerson]=useState([
  {name:'Youssef',age:24},
   {name:'KAMAL',age:30} 
]);
//   state={
//     person:[
//     {name:'Youssef',age:24},
//     {name:'KAMAL',age:30} ]
// };
const updateName=()=>{
  const updatePerson=[...person]
  updatePerson[0].name ='new Name'
  updatePerson[0].age=25
  setPerson(updatePerson);
}

  return (
    <div className="App">
      <Youssef name={person[0].name} age={person[0].age} metier="devloper full stack" />
      <Youssef name={person[1].name} age= "34 "metier="OTM" >ok im here</Youssef>
      <button onClick={updateName}>Mettre à jour le nom</button>
    </div>
  );
}

export default App;
