
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Appa from './pages/app/App'
import { Unknown } from './pages/Unknown'
import Video from './pages/Video'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Appa />}/>
          <Route path="*" element={<Unknown/>} />
          <Route path="/video" element={<Video />} /> 
        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
