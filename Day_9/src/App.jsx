import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('Learner')
  function randomValue() {
    setValue(Math.floor(Math.random()*100)+1)
  }

  return (
    <>
      <Header data={value} /> 
      <Header data='React' />
      <button onClick={randomValue}>random value</button>
    </>
  )
}

function Header({ data }) {
  return (
    <h2>Hey I'm {data}</h2>
  )
}

export default App
