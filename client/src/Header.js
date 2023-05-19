import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header>  
        <a href="/" class="logo">StriveOpp</a>
        
        <nav>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/register"><button>Register</button></Link>
            <Link to="/book"><button>Book Appointment</button></Link>
        </nav>
        </header>
    )
}