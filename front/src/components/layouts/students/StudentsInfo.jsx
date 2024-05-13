import "../students/Students.css";

const StudentInfo = () => {
    return (
        <form className="principal">
            <h1>Reserva de Equipos</h1>
            <br /> {/*Salto de linea*/}
            <h4>Reserva equipos en cuestion de segundos, ¡Planifica 
                tu estudio sin complicaciones!
            </h4>
            <br />
            <section>
            <h1 className="title">Informacion del Estudiante</h1>
                <div className="pCont">
                    <div className="div min-cont1">
                        <div className="divi doc">
                            <div class="inputbox">
                                <input required="required" type="text" />
                                <span>Documento</span>
                                <i></i>
                            </div>
                        </div>
                        <div className="divi nom">
                        <div class="inputbox">
                            <input required="required" type="text" />
                            <span>Nombre</span>
                            <i></i>
                        </div>
                        </div>
                        <div className="divi tel">
                        <div class="inputbox">
                            <input required="required" type="text" />
                            <span>Telefono Celular</span>
                            <i></i>
                        </div>
                        </div>
                    </div>
                    <div className="div min-cont2">
                        <div className="divi mail">
                        <div class="inputbox">
                            <input required="required" type="text" />
                            <span>Correo Electronico</span>
                            <i></i>
                        </div>
                        </div>
                        <div className="divi prog">
                        <div class="inputbox">
                            <input required="required" type="text" />
                            <span>Programa Tecnico</span>
                            <i></i>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    )
}
export default StudentInfo