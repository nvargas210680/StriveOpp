import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import NavigationBar from './Pages/navbar.js';
import Header from './Header';
import Footer from './Footer';
import Layout from './Layout';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import Blog from './Pages/Blog';
import Scholarships from './Pages/Scholarship';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Team from './Pages/Team';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <Layout />}>
        <Route index element={ <HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
