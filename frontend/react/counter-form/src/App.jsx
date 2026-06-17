import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Counter from './components/Counter';
import Greeting from './components/Greeting';

function App() {

  return (
    <>

    <Counter />
<br />
<Greeting />

    </>
  )
}

export default App
