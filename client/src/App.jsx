import { useState } from 'react'
import './App.css'

import { Auth } from './components/auth'
import { db, auth, storage } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

import { Link, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/Registration/00_RegistrationPage'
import Blog from './pages/Blog'
import Team from './pages/Team'
import Coaching from './pages/Coaching'
import ScholarshipDatabase from './pages/ScholarshipDatabase'
import About from './pages/About';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />}/>
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/database" element={<ScholarshipDatabase />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
