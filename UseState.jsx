import React from 'react'
import { useState } from 'react'

function UseState() {
    const [count,setCount]=useState(0)
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        if(count>0){
        setCount(count-1)
        }
    }
    function reset(){
        setCount(0)
    }
  return (
    <div className='container'>
        <h1 style={{color:'blue'}}>Counter Application</h1>
        <p>{count}</p>
        <div className='buttons'>
      <button onClick={increment} style={{background:'red'}}> +</button>
      <button onClick={decrement} style={{background:'green'}}>-</button>
      <button onClick={reset} style={{background:'yellow'}}>Reset</button>
      </div>
    </div>
  )
}

export default UseState
