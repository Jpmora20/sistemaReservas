const StudentInfo = () => {
    return (
        <form >
            <h1>Reserva de Equipos</h1>
            <h4>Reserva equipos en cuestion de segundos, !Planifica 
                tu estudio sin complicaciones¡
            </h4>
            <section>
                <h1>Informacion del Estudiante</h1>
                <p>Documento de Identidad</p>
                <input type="text" name="document" id="document" />
                <p>Nombre del Estudiante</p>
                <input type="text" name="nameStudent" id="nameStudent" />
                <p>Telefono Celular</p>
                <input type="tel" name="cellPhone" id="cellPhone" />
                <p>Correo</p>
                <input type="email" name="mail" id="mail" />
                <p>Programa Tecnico</p>
                <input type="text" name="tecProgram" id="tecProgram" />
            </section>
        </form>
    )
}
export default StudentInfo