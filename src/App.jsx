import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CharacterCounter from './components/CharacterCounter'
import ProductQunatity from './components/ProductQunatity'
import ColorPicker from './components/ColorPicker'
import ProfileCard from './components/ProfileCard'
import FeedbackCollector from './components/FeedbackCollector'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CharacterCounter/>
      <hr />
      <ProductQunatity/>
      <hr />
      <ColorPicker/>
      <hr />
      <ProfileCard/>
      <hr />
      <FeedbackCollector/>
    </>
  )
}

export default App
