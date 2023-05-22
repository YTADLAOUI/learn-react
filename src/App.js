import Youssef from'./components/Youssef.js'
import './App.css';
import { useState } from 'react';

function App() {

const [person,setPerson]=useState([
  {name:'usf',age:24,metier:'full stack'},{name:'kamal',age:29,metier:'ATM'}
]);
  const updatePerson=(good)=>{
    const updPerson=[...person];
    updPerson[0].name=good
    setPerson(updPerson);
  }
  const [namePerson,updateName]=useState('');
  const UpdtName=()=>{
    const updPerson=[...person];
    updPerson[0].name=namePerson;
    setPerson(updPerson)
  }
 const handlName =(event)=>{
  updateName(event.target.value)
 }
 const handlSubmit=(event)=>{
    event.preventDefault();
    UpdtName();
 }
  return (
    <div className="App">
      <Youssef name={person[0].name} age={person[0].age} metier={person[0].metier} />
      <Youssef click={updatePerson.bind(this,'nada')} name={person[1].name} age={person[1].age} metier={person[1].metier} >ok im here</Youssef>
      <button onClick={updatePerson.bind(this,'tadlaoui')}>Mettre à jour le nom</button>
      <form onSubmit={handlSubmit}>
  <label>
    <input type='text' onChange={handlName}></input>
    <button type='submit'>change </button>
  </label>

      </form>
      
    </div>
  );
}

export default App;
