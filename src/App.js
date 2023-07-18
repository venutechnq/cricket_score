import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [count ,setCount] = useState(100);
  function increase(){
    setCount(count +1)
  }

  function decrease(){
    setCount(count-1)
  }
  function reset(){
    setCount(0)
  }
  function SIX(){
    setCount(count +6)
  }
  function FOUR(){
    setCount(count +4)
  }
  
  function EXTRA(){
    setCount(count +1)
  }
  
  
  return (
    <div className='container'>
    <h1 className='heading'>SCORE : {count} </h1>
    <button className='btn'onClick={increase}>RUNS</button>  &nbsp; {count} &nbsp;
    <button  className='btn' onClick={decrease}>-</button> &nbsp;
    <button className='btn' onClick={reset}>Reset</button><br></br>
    <button  className='btn' onClick={SIX}>SIX</button><br></br>
    <button className='btn' onClick={FOUR}>FOUR</button><br></br>
    <button className='btn' onClick={EXTRA}>EXTRA</button><br></br>
  </div>
  );
}

export default App;
