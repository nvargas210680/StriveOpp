import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Fonts from './Components/Fonts/Font'

import Layout from './Layout/Layout'
import HomePage from './Pages/HomePage/HomePage'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import ScholarshipDatabase from './Pages/ScholarshipDatabase/ScholarshipDatabase'
import Coaching from './Pages/Coaching/Coaching'
import Blog from './Pages/Blog/Blog'
import Team from './Pages/Team/Team'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Fonts />

    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout /> }>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/scholarships" element={<ScholarshipDatabase />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>

    </>
  )
}

export default App
