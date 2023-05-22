import Youssef from'./components/Youssef.js'
import './App.css';
import { useState } from 'react';

function App() {

const [person,setperson]=useState([
  {name:'Youssef',age:24},
   {name:'KAMAL',age:30} 
]);
//   state={
//     person:[
//     {name:'Youssef',age:24},
//     {name:'KAMAL',age:30} ]
// };
  return (
    <div className="App">
      <Youssef name={person[0].name} age="24" metier="devloper full stack" />
      <Youssef name={person[1].name} age="34" metier="OTM" >ok im here</Youssef>

    </div>
  );
}

export default App;
