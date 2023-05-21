import React from "react";

function Youssef(props){
const  {name,age,metier} = props;
  const grandName={
    color:'blue',
    fontWeight:'bolde',
    border:'2px solid #eee'
  } ;
return(
    <div>
      <h1 style={grandName}>{name}</h1>
      <p>age:{age},{metier}</p>
    </div>
 );
}
export default Youssef;