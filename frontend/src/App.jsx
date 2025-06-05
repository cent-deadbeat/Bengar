import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ContactUs from './pages/ContactUs'
import About from './pages/About'
import OurProducts from './pages/OurProducts'
import OurPartners from './pages/OurPartners'
import OurClient from './pages/OurClient'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/ourpartners' element={<OurPartners />}></Route>
        <Route path='/ourclients' element={<OurClient />}></Route>
      </Routes>
    </>
  )
}

export default App
