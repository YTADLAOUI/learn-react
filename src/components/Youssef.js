import React from "react";

function Youssef(props){
  const  {name,age,metier,click} = props;
  const grandName={
    color:'blue',
    fontWeight:'bolde',
    border:'2px solid #eee'
  } ;
return(
    <div>
      <h1 style={grandName}>{name}</h1>
      <p onClick={click} >age:{age},{metier}</p>
      <p>{props.children}</p>
    </div>
 );
}
export default Youssef;