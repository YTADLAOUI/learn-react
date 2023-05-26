import Fin from'./components/Youssef.js'
import './App.css';
import Test from './components/test.js'
import { useState } from 'react';

function App() {

const [count,setCount]=useState(0);
const inctrmment=()=>{
setCount(count + 1)
}
const decrement=()=>{
  count > 0 ?
setCount(count - 1) :setCount(count)
}
  return (
    <div className="App">
      {/* <Fin/>
      <Test/> */}
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={inctrmment}>+</button>
    </div>
  );
}

export default App;
