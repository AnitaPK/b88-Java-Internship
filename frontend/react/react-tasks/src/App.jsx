import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CharacterCounter from './components/CharacterCounter'
import ProductPrice from './components/ProductPrice'
import ColorPcker from './components/ColorPcker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CharacterCounter />
     <ProductPrice />
     <ColorPcker />
    </>
  )
}

export default App
