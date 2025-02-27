import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import exchangeRateficon from '../public/images/exchange-rate.png'
import cardswipingvideo from '../public/videos/Payment.mp4'
import SelectAccounttype from './pages/Signup.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <SelectAccounttype/>
   </>
  )
}

export default App
