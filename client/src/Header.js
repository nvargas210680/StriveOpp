import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header>  
        <a href="/" class="logo">StriveOpp</a>
        
        <nav>
            <div class="column">
                <div class="row">
                    <Link to="/login"><button class="login">Login</button></Link>
                    <Link to="/register"><button class="register">Register</button></Link>
                </div>
                <div class="row">
                    <Link to="/book"><button class="appointment">Book Appointment</button></Link>
                </div>
            </div>
        </nav>
        </header>
    )
}