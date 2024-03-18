import './header.css';
function Header(){
    return(
        <header>
            <nav>
            <div className="logoC">
                <p>LOGO CESDE</p>
            </div>
            <div className="mSalir">
                <button className="salir">SALIR</button>
            </div>
        </nav>
        </header>
        
    )
}
export {Header}