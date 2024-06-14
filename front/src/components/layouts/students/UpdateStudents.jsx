import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import './EditStudents.css' 

let urlEstudiantes = "http://localhost:3000/estudiante/";

const UpdateStudents = () => {
    const [getDocument, setDocument] = useState("");
    const [getName, setName] = useState("");
    const [getContrasena, setContrasena] = useState("");
    const [getProgram, setProgram] = useState("");
    const [getEmail, setEmail] = useState("");
    let { id } = useParams()

    function upgradeStudents() {
        Swal.fire({
            title: "Está seguro que desea editar el usuario? ",
            text: "No se puede reversar esta acción!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Editar",
        }).then((result) => {
            if (result.isConfirmed) {
                confirmar(id);
                Swal.fire({
                    title: "Editado!",
                    text: "El usuario se editó correctamente.",
                    icon: "success",
                });
            }
        });
    }
    async function confirmar(id) {
        let newStudent = {
            documento: getDocument,
            nombre: getName,
            contraseña: getContrasena,
            programa: getProgram,
            correo: getEmail,
        }
        await axios.put(urlEstudiantes + id, newStudent)
    }

    async function studentID() {
        let studentEdit = await axios.get(urlEstudiantes + id)
        setDocument(studentEdit.data.documento)
        setContrasena(studentEdit.data.contrasena)
        setName(studentEdit.data.nombre)
        setProgram(studentEdit.data.programa)
        setEmail(studentEdit.data.correo)
    }

    useEffect(() => { studentID() }, [])

    return (

        <div id="divRegistro">
            <img src="/src/assets/logoCesde.png" alt="logoCesde" id="logo" />
            <section id="form-registro">
                <h5>Editar Estudiante</h5>
                <p className="textoRegistro">Porfavor complete todos los campos</p>
                <div id="divCampos">
                    <div className="campo">
                        <label htmlFor="documento">Nro documento</label>
                        <input type="text" className="control" id="documento" placeholder="Numero de documento" onChange={(e) => {
                            setDocument(e.target.value);
                        }} data-index="1" value={getDocument} />
                    </div>
                    <div class="coolinput">
                        <label for="input" class="text">Numero de documento</label>
                        <input type="text" className="control" id="documento" placeholder="Numero de documento" onChange={(e) => {
                            setDocument(e.target.value);
                        }} data-index="1" value={getDocument}/>
                    </div>
                    <div className="campo">
                        <label htmlFor="documento">Contraseña</label>
                        <input type="text" className="control" id="contrasena" placeholder="Contraseña" onChange={(e) => {
                            setContrasena(e.target.value);
                        }} data-index="1" value={getContrasena}/>
                    </div>
                    <div className="campo">
                        <label htmlFor="nombre">Nombre completo</label>
                        <input type="text" className="control" id="nombre" placeholder="Nombre completo" data-index="2" onChange={(e) => {
                            setName(e.target.value)
                        }} value={getName}/>
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
                        }} value={getEmail}/>
                    </div>
                </div>
                <div className="btns">
                    <button onClick={upgradeStudents} type="btn" className="btn btn-editar">
                        Editar Estudiante
                    </button>
                    <button type="button" className="btn btn-eliminar">
                        <Link to={"/editStudents"} className="btn btn-eliminar">Cancelar</Link>
                    </button>
                </div>
            </section>

        </div>
        // <form>
        //     <div className="container">
        //         <h2>Editar Estudiante</h2>
        //         <div className="inputGroup">
        //             <label htmlFor="document">Documento: </label>
        //             <input type="text" id="document" onChange={(e) => { setDocument(e.target.value) }} value={getDocument} />
        //         </div>
        //         <div className="inputGroup">
        //             <label htmlFor="name">Nombre Completo: </label>
        //             <input type="text" id="name" onChange={(e) => { setName(e.target.value) }} value={getName} />
        //         </div>
        //         <div className="inputGroup">
        //             <label htmlFor="password">Contraseña: </label>
        //             <input type="password" id="password" onChange={(e) => { setContrasena(e.target.value) }} value={getContrasena} />
        //         </div>
        //         <div className="inputGroup">
        //             <label htmlFor="program">Programa: </label>
        //             <input type="text" id="program" onChange={(e) => { setProgram(e.target.value) }} value={getProgram} />
        //         </div>
        //         <div className="inputGroup">
        //             <label htmlFor="email">Correo: </label>
        //             <input type="email" id="email" onChange={(e) => { setEmail(e.target.value) }} value={getEmail} />
        //         </div>
        //     </div>
        //     <section className="buttons">
        //         <button onClick={upgradeStudents} type="btn" className="btn">
        //             Editar Estudiante
        //         </button>
        //         <button type="button" className="btn">
        //             <Link to={"/editStudents"}>Cancelar</Link>
        //         </button>
        //     </section>

        // </form>

    )
}
export default UpdateStudents