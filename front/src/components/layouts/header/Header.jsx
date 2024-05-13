import './header.css';
import { Link } from "react-router-dom";

function Header(){

    return(
        <header>
            <nav>
            <div className="logoC">
            <img src="/src/assets/logoCesde.png" alt="logoCesde" className="logo"/>
            </div>
            <div className="mSalir">
                <button><span><Link to="/">Salir</Link></span></button>
            </div>
        </nav>
        </header>
        
    )
}
export {Header}