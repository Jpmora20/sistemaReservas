import './header.css';
import { Link } from "react-router-dom";

function Header(){

    return(
        <header className='head'>
            <nav className='navbar'>
                <div className="caja caja-logo">
                    <img src="/src/assets/logoCesde.png" alt="logoCesde" className="logo"/>
                </div>
                <div className="caja caja-btn">
                    <button><span><Link to="/" className='btn'>Salir</Link></span></button>
                </div>
            </nav>
        </header>
        
    )
}
export {Header}