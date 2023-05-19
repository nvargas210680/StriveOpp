import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import NavigationBar from './Pages/navbar.js';
import Header from './Header';
import Footer from './Footer';
import Layout from './Layout';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';

function App() {
  return (
    <>

    <NavigationBar />
    <Routes>
      <Route path="/" element={ <Layout />}>
        <Route index element={ <HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />
      </Route>
    </Routes>

    <Footer />
    </>
  );
}

export default App;
