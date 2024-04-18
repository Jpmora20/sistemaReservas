import './LoginAdmin.css'
const LogInAdmin = () => {
  
    return (
        
            <div className="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Usuario" required/>
                    </div>
                
                    <div className="input-box">
                        <input type="password" placeholder="Contraseña" required/>
                    </div>

                    <div className="olvidar-contraseña">
                        <a href="#">Olvidaste la contraseña?</a>
                    </div>
                    <button type="submit">Sign in</button>
                </form>
            </div>
    )
}

export default LogInAdmin