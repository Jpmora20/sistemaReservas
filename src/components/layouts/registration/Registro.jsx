 import './Registro.css';
const Registro = () => {
    return (
       <div id="divRegistro">
        <img src="/src/assets/logoCesde.png" alt="logoCesde" id="logo" />
        <section id="form-registro">
            <h5>Registrarse</h5>
            <p class="textoRegistro">Porfavor complete todos los campos</p>
            <div id="divCampos">
            <div className="campo">
                <label htmlFor="documento">Nro documento</label>
                <input type="text" class="control" id="documento" placeholder="Numero de documento"  data-index="1"/>
            </div>
            <div className="campo">
                <label htmlFor="nombre">Nombre completo</label>
                <input type="text" class="control" id="nombre" placeholder="Nombre completo" data-index="2"/>
            </div>
            <div className="campo">
                <label htmlFor="curso">Programa cursando</label>
                <select class="control" id="curso" required data-index="3" >
                    <option value="" selected disabled>Seleccione una opción</option>
                    <option value="">Tecnico Asistente En Desarrollo De Sofware</option>
                    <option value="">Confiar</option>
                    <option value="">Olivos</option> 
                </select>
            </div>
            <div className="campo">
                <label htmlFor="correo">Correo electronico</label>
                <input type="text" class="control" id="correo" placeholder="Correo Electronico" data-index="4"/>
            </div>
            <div className="campo">
                <label htmlFor="numero">Numero de celular</label>
                <input type="text" class="control" id="numero" placeholder="Numero de celular" data-index="5"/>
            </div>
            <p class="textoLogin">Ya tienes una cuenta? <a href="#">Inicia sesion</a></p>
            <button id="btnRegistro"></button>
            </div> 
        </section>
       </div>
    
    );
};
export default Registro;