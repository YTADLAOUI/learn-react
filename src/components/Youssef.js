import React, { useState } from "react";
import './style.css'

 



function Youssef(props){
  const  {name,age,metier,click,tap} = props;
  const grandName={
    color:'blue',
    fontWeight:'bolde',
    border:'2px solid #eee'
  } ;
  
    const [show,setShow]=useState(false)

return(
    <div className="pr" onClick={tap}>
      <h1 style={grandName}>{name}</h1>
      {show===true ?(
      <p onClick={click} >age:{age},{metier}</p>):null}
      <p>{props.children}</p>
      <button onClick={()=>setShow(!show)}>show</button>
    </div>
 );
}


function fin(){
  const [person,setPerson]=useState([
    {id:'k1',name:'usf',age:24,metier:'full stack'},{id:'k2',name:'kamal',age:29,metier:'ATM'}
  ]);
    const updatePerson=(good)=>{
      const updPerson=[...person];
      updPerson[0].name=good
      setPerson(updPerson);
    }
    const [namePerson,updateName]=useState('');
    // console.log(namePerson,'hh')
    // console.log(person);
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
      console.log(namePerson,'hh')
   }
  const deleteElement = (index)=>{
    console.log(person)
    person.splice(index,1);
       setPerson([...person]);
  }

   return (
    <div>

      {person.map((person,index)=>{
        return<Youssef key={person.id} tap={()=>deleteElement(index)} name={person.name} age={person.age} metier={person.metier} />
      })}

     {/* <Youssef name={person[0].name} age={person[0].age} metier={person[0].metier} />
      <Youssef click={updatePerson.bind(this,'nada')} name={person[1].name} age={person[1].age} metier={person[1].metier} >ok im here</Youssef>
      <button onClick={updatePerson.bind(this,'tadlaoui')}>Mettre à jour le nom</button>
      <form onSubmit={handlSubmit}> 
  <label>
    <input type='text' onChange={handlName}></input>
    <button type='submit'>change </button>
  </label>

      </form> */}
      
    </div>
  );
}
export default fin;