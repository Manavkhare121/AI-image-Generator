import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageComponent from './components/ImageGenerator/ImageComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ImageComponent/>
     
    </div>
  )
}

export default App
