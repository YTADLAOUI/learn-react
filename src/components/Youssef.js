import React, { useState } from "react";
import './style.css'




function Youssef(props){
  const  {name,age,metier,click} = props;
  const grandName={
    color:'blue',
    fontWeight:'bolde',
    border:'2px solid #eee'
  } ;
  
    const [show,setShow]=useState(false)

return(
    <div className="pr">
      <h1 style={grandName}>{name}</h1>
      {show===true ?(
      <p onClick={click} >age:{age},{metier}</p>):null}
      <p>{props.children}</p>
      <button onClick={()=>setShow(!show)}>show</button>
    </div>
 );
}
export default Youssef;