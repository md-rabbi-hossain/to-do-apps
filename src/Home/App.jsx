import { useState } from 'react'
import Todos from '../pages/todos'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Todos />
    </>
  )
}

export default App
