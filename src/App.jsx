import { useState } from 'react';
import './App.css';
import RandomID from './RandomID';
import PasswordGenerator from './PasswordGene';
import App2 from './Crud';

function App() {

  // <h1>USE state</h1>**********************************************************

  let [state, setstate] = useState(0)
  let [name, setName] = useState("murfad malik")
  function handle(e) {
    return (
      setstate((state) => state + 1),
      setstate((state) => state + 1),
      setstate((state) => state + 1)
    )
  }
  function handle2(e) {
    return (
      setstate((state) => state - 1)
      // setstate((state) => state - 1),
      // setstate((state) => state - 1),
    )
  }
  function nameChange(e) {
    return (
      <>
      {Array.from(["murfad","is ","good","Boy","make","Friend"],N=>(
        setName(N)
      ))}
      </>
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
      <button onClick={()=>{setstate(0)}}>reset Counter</button>
      <hr />
      <h1>{name}</h1>
      <button onClick={nameChange}>hit's up</button>
      <hr />
      <hr />
      <RandomID/>
      <PasswordGenerator/>
      <App2/>
    </div>
  );
}

export default App;
