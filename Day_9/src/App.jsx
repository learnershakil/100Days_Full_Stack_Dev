import React, {memo} from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('Learner')
  function randomValue() {
    setValue(Math.floor(Math.random()*100)+1)
    // setValue('Learner')
  }

  return (
    <>
      <Header data='React' />
      <DynamicHeader data={value} /> 
      <button onClick={randomValue}>random value</button>
    </>
  )
}

// function HeaderwithButton() {
//   const [value, setValue] = useState('Learner')
//   function randomValue() {
//     setValue(Math.floor(Math.random()*100)+1)
//   }
//   return(
//     <>
//     <Header data={value} /> 
//     <button onClick={randomValue}>random value</button>
//     </>
//   )
// }

function Header({ data }) {
  return (
    <h2>Hey I'm {data}</h2>
  )
}

const DynamicHeader = React.memo(function Header({data}){
  return(
    <h2>Hey I'm {data}</h2> 
  )
})

export default App
