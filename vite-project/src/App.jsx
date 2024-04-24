import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navsec from './assets/components/navsec/Navsec'
import Solsec from './assets/components/solsec/Solsec'
import Servicesec from './assets/components/servicesec/Servicesec'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navsec></Navsec>
      <Solsec></Solsec>
      <Servicesec></Servicesec>
    </>
  )
}

export default App
