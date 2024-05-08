import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import './Registro.css';
let urlEstudiantes = "http://localhost:3000/estudiante"
const Registro = () => {
    const [getDocument, setDocument] = useState("");
    const [getName, setName] = useState("");
    const [getContrasena, setContrasena] = useState("");
    const [getProgram, setProgram] = useState("");
    const [getEmail, setEmail] = useState("");
    const [documentos, setDocumentos] = useState([]);
    const redireccion = useNavigate();
    async function getEstudiantes() {
        let response = await axios.get(urlEstudiantes);
        console.log(response.data);
        setDocumentos(response.data);
    }
    useEffect(() => {
        getEstudiantes();
    }, []);

    function buscarDocumento() {
        return documentos.some((documento) => documento.id === getDocument);
    }
    async function agregarEstudiante() {
        let estudiante = {
            id: getDocument,
            nombre: getName,
            contrasena: getContrasena,
            programa: getProgram,
            correo: getEmail,
        };
        await axios.post(urlEstudiantes, estudiante);
    }
    const registrarEstudiante = () => {
        if (buscarDocumento()) {
            Swal.fire({
                tittle: "Error",
                text: "Ya existe un estudiante registrado con ese documento",
                icon: "error",
            })
        } else {
            agregarEstudiante();
            console.log(documentos);
            redireccion("/")
        }
    }
    return (
        <div id="divRegistro">
            <img src="/src/assets/logoCesde.png" alt="logoCesde" id="logo" />
            <section id="form-registro">
                <h5>Registrarse</h5>
                <p className="textoRegistro">Porfavor complete todos los campos</p>
                <div id="divCampos">
                    <div className="campo">
                        <label htmlFor="documento">Nro documento</label>
                        <input type="text" className="control" id="documento" placeholder="Numero de documento" onChange={(e) => {
                            setDocument(e.target.value);
                        }} data-index="1" />
                    </div>
                    <div className="campo">
                        <label htmlFor="documento">Contraseña</label>
                        <input type="password" className="control" id="contrasena" placeholder="Contraseña" onChange={(e) => {
                            setContrasena(e.target.value);
                        }} data-index="1" />
                    </div>
                    <div className="campo">
                        <label htmlFor="nombre">Nombre completo</label>
                        <input type="text" className="control" id="nombre" placeholder="Nombre completo" data-index="2" onChange={(e) => {
                            setName(e.target.value)
                        }} />
                    </div>
                    <div className="campo">
                        <label htmlFor="curso">Programa cursando</label>
                        <select className="control" id="curso" required data-index="3" onChange={(e) => {
                            setProgram(e.target.value);
                        }} value={getProgram}>
                            <option value="" disabled>Seleccione una opción</option>
                            <option value="Tecnico Asistente En Desarrollo De Sofware">Tecnico Asistente En Desarrollo De Sofware</option>
                            <option value="Confiar">Confiar</option>
                            <option value="Olivos">Olivos</option>
                        </select>
                    </div>
                    <div className="campo">
                        <label htmlFor="correo">Correo institucional</label>
                        <input type="text" className="control" id="correo" placeholder="Correo Electronico" data-index="4" onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                    </div>
                    <p className="textoLogin">Ya tienes una cuenta? <a href="#">Inicia sesion</a></p>
                    <button onClick={registrarEstudiante} id="btnRegistro"></button>
                </div>
            </section>
        </div>

    );
};
export default Registro;