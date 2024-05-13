import './header.css';
import { useNavigate } from "react-router-dom";

function Header(){
    const redireccion = useNavigate();

    return(
        <header>
            <nav>
            <div className="logoC">
            <img src="/src/assets/logoCesde.png" alt="logoCesde" className="logo"/>
            </div>
            <div className="mSalir">
                <button onClick={redireccion("/")}><span>Salir</span></button>
            </div>
        </nav>
        </header>
        
    )
}
export {Header}