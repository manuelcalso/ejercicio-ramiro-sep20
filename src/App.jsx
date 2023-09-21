import { useState } from 'react'
import bacalar from "./assets/bacalar1.jpg"

import './App.css'
import NavBar from './NavBar'

function App() {

  return (
    <>
      <div>
        <NavBar imagen={bacalar}/>
        <br />
        <img src={bacalar} alt="" />
      </div>
      
    </>
  )
}

export default App
