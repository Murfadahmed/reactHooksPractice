import React from 'react'
import { useState } from 'react';
const UseID =()=>{
  return '_' + Math.random().toString(36).substr(2, 9);
}
function RandomID() {
  const [id ,setId] = useState('')

  const randomId = ()=>{
    const newId = UseID()
    setId(newId)
  }
  return (
    <>
    <h1>Random Id generater</h1>
      <h1>{id}</h1>
      <button onClick={randomId}>genrate Random ID</button>
    </>
  )

}

export default RandomID