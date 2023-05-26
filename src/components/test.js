import React, { useState } from "react";
const testFun=()=>{

const [test, setTest] = useState([
  { id: 1, name: "tadlaoui", age: 23 },
  { id: 2, name: "youssef", age: 24 },
]);

const mapTest=()=>{
   const newArr=test.map((tes)=>{
     return tes.id=== 1 ? { ...tes,age:24 } : {...tes}
    })
    setTest(newArr)
    console.log(test);
}
     
return(
<button onClick={mapTest}>click here</button>
);
} 
export default testFun;