import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import './EditStudents.css'


let urlEstudiantes = "http://localhost:3000/estudiante";

const EditStudent = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const getStudents = async () => {
        let response = await axios.get(urlEstudiantes);
        console.log(response.data);
        setEstudiantes(response.data);
    }
    useEffect(() => {getStudents()}, [])

    function deleteStudent (id, documento){
      Swal.fire({
        title: "Está seguro que desea eliminar el usuario? " + documento,
        text: "No se puede reversar esta acción!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
      }).then((result) => {
        if (result.isConfirmed) {
          confirmar(id);
          Swal.fire({
            title: "Eliminado!",
            text: "El usuario se eliminó correctamente.",
            icon: "success",
          });
        }
      });
    }

    async function confirmar(id){
      await axios.delete(urlEstudiantes + "/" + id)
      getStudents()
    }
    return(
        
      <div className="editStudents">
        <div className="caja">
          <button>
            <Link to={"/home"} className="btn btn-salir">Salir</Link>
          </button>
          </div>
        <section className="students">
          {estudiantes.map((estudiante) => (
            <section className="card" key={estudiante.id}>
              <p className="caja">Documento: {estudiante.documento}</p>
              <div class="inputbox">
                <input defaultValue={estudiante.contrasena} type="text"/>
                <span>Username</span>
                <i></i>
              </div>
              <p className="caja">ID: {estudiante.id}</p>
              <section>
                <div className="caja">
                  <button>
                    <Link to={"/updateStudents/" + estudiante.id} className="btn btn-editar">Editar</Link>
                  </button>
                </div>
                <div className="caja">
                  <button onClick={() => deleteStudent(estudiante.id)} className="btn btn-eliminar">
                  Eliminar
                  </button>
                </div>
              </section>
            </section>
          ))}
        </section>
      </div>
      
    ) 
}

export default EditStudent