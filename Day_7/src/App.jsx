import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CustomButton count={count} setCount={setCount}></CustomButton>
    <CustomButton count={count + 1} setCount={setCount}></CustomButton>
    <CustomButton count={count - 1} setCount={setCount}></CustomButton>
    <CustomButton count={count * 100} setCount={setCount}></CustomButton>
    </>
  )
}

function CustomButton(prop) {
  function handleClick() {
    prop.setCount(prop.count + 1)
  }

  return (
    <button onClick={handleClick}>{prop.count}</button>
  )
}

export default App
