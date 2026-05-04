
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')


  return (
    <div>
      <h1>Name Display</h1>
      <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
      
    </div>
  )
}

export default App
