import {React , useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  //increase  
  const increase = ()=>{
    setCount(count+1);
  }
  //decrease
  const decrease = ()=>{
    setCount(count-1);
  }
  //reset to 0
  const reset = ()=>{
    setCount(0);
  }

  return (
   <>
    <div className="App">
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={()=>{increase();}}>add</button>
      <button onClick={()=>{decrease();}}>minus</button>
      <button onClick={()=>{reset();}}>reset</button>
    </div>
   </>
  );
}

export default App;
