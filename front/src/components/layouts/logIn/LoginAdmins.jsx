import './LoginAdmin.css';
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';

const urlEstudiantes = "http://localhost:3000/estudiante";

const LogInAdmin = () => {
    const [getDocument, setDocument] = useState("");
    const [getPassword, setPassword] = useState("");
    const [estudiantes, setEstudiantes] = useState([]);
    const redireccion = useNavigate();

    async function getEstudiantes() {
        let response = await axios.get(urlEstudiantes);
        console.log(response.data);
        setEstudiantes(response.data);
    }
    function validarInicioSesion() {
        if (buscarDocumento()) {
            Swal.fire({
                text: "Inicio de sesión exitoso!",
                icon: "success",
            })
            redireccion("/home");
        } else {
            console.log("Error de credenciales");
            Swal.fire({
                title: "Error",
                text: "Contraseña o Documento incorrectos",
                icon: "error",
            })
        }
    }
    useEffect(() => {
        getEstudiantes();
    }, []);


    function buscarDocumento() {
        return estudiantes.some(
            (estudiante) => estudiante.document == getDocument && estudiante.contrasena === getPassword
        )
    }

    return (
        <div className="divlogin">
            <section id='form-login'>
                <h5>Inicio sesión</h5>
                <p className="textologin">Por favor complete todos los campos</p>
                <div className="campo">
                    <label htmlFor="documento">Documento:</label>
                    <input type="text" className="control" id="documento" onChange={(e) => {
                        setDocument(e.target.value);
                    }} required />
                </div>

                <div className="campo">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" className="control" id="password" onChange={(e) =>
                        setPassword(e.target.value)} required />
                </div>

                <div className="olvidar-contraseña">
                    <p>No tienes cuenta? <Link to="/registro">Registrate aqui</Link></p>
                </div>
                <button className="btnlogin" type="submit" onClick={validarInicioSesion}>Iniciar sesión</button>
            </section>
        </div>
    )
}

export default LogInAdmin;
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './LoginAdmin.css';
// let urlEstudiantes = "http://localhost:3000/estudiante"

// const LogInAdmin = () => {
  
//     return (
        
//             <div className="wrapper">
//                 <form action="">
//                     <h1>Login</h1>
//                     <div className="input-box">
//                         <input type="text" placeholder="Usuario" required/>
//                     </div>
                
//                     <div className="input-box">
//                         <input type="password" placeholder="Contraseña" required/>
//                     </div>

//                     <div className="olvidar-contraseña">
//                         <a href="#">Olvidaste la contraseña?</a>
//                     </div>
//                     <button type="submit">Sign in</button>
//                 </form>
//             </div>
//     )
// }

// export default LogInAdmin