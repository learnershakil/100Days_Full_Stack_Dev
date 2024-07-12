import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <Header data='React' />
      <HeaderwithButton />
    </>
  )
}

function HeaderwithButton() {
  const [value, setValue] = useState('Learner')
  function randomValue() {
    setValue(Math.floor(Math.random()*100)+1)
  }
  return(
    <>
    <Header data={value} /> 
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
