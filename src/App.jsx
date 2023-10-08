import { useState } from 'react';
import './App.css';

function App() {
  let [state,setstate] = useState(0)
  let [name ,setName]= useState("murfad malik")
  function handle(e) {
    return(
      setstate((state)=>state + 1),
      setstate((state)=>state + 1),
      setstate((state)=>state + 1)
    )
  }
  function handle2(e) {
    return(
      setstate((state)=>state - 1),
      setstate((state)=>state - 1),
      setstate((state)=>state - 1)
    )
  }
  function nameChange(e) {
    return(
      name ==="murfad malik" ? 
      setName("ahmed") : setName("murfad")
    )
  }
  return (
    <div className="App">
      <h1>counter app</h1>
      <p>{state}</p>
      <button onClick={handle}>Click me Up{state}</button>
      <br />
      <br />
      <button onClick={handle2}>Click me down {state}</button>
      <hr />
      <hr />
      <h1>{name}</h1>
      <button onClick={nameChange}>hit's up</button>
    </div>
  );
}

export default App;
